import { useAuth } from "src/context/AuthUserContext";
import { parseCookies } from 'nookies';
import { createContext, useContext } from "react";
import axios from "axios";

export const ApiServiceContext = createContext({
    get: async () => { },
    post: async () => { },
});

export function ApiServiceProvider({ children }) {

    const { logout } = useAuth()

    const apiClient = axios.create({
        baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
    }).interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (401 === error.response.status) {
            console.log("Invalid token, logging out")
            logout()
        } else {
            return Promise.reject(error);
        }
    });

    const getHeaders = () => {
        return {
            'Authorization': 'Bearer ' + parseCookies().token
        }
    }

    const post = async (resource, payload, headers = getHeaders()) => {
        return await apiClient.post(resource, payload, {
            headers: headers
        })
    }

    const get = async (resource, headers = getHeaders()) => {
        return await apiClient.get(resource, {
            headers: headers
        })
    }

    return <ApiServiceContext.Provider value={{ get, post }}>{children}</ApiServiceContext.Provider>;
}

export const useApi = () => useContext(ApiServiceContext)