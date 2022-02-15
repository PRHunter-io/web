import { useAuth } from 'src/context/AuthUserContext';
import { parseCookies } from 'nookies';
import { createContext, useContext } from 'react';
import axios from 'axios';

export const ApiServiceContext = createContext({});

export function ApiServiceProvider({ children }) {
  const { logout } = useAuth();

  const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  apiClient.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (401 === error.response.status) {
        console.log('Invalid token, logging out');
        logout();
      } else {
        return Promise.reject(error);
      }
    }
  );

  const getHeaders = () => {
    return {
      Authorization: 'Bearer ' + parseCookies().token,
    };
  };

  const post = async (resource, payload) => {
    return await apiClient
      .post(resource, payload, {
        headers: getHeaders(),
      })
      .then((res) => res.data);
  };

  const put = async (resource, payload) => {
    return await apiClient
      .put(resource, payload, {
        headers: getHeaders(),
      })
      .then((res) => res.data);
  };

  const get = async (resource) => {
    return await apiClient
      .get(resource, {
        headers: getHeaders(),
      })
      .then((res) => res.data);
  };

  return (
    <ApiServiceContext.Provider value={{ get, post, put }}>
      {children}
    </ApiServiceContext.Provider>
  );
}

export const useApi = () => useContext(ApiServiceContext);
