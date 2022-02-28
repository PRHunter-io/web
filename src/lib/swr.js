import { useApi } from '@/context/ApiServiceContext';
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';

export const useUserBounties = () => {
  const { get } = useApi();
  const axiosFetcher = (url) => get(url);
  const { data, error } = useSWR('/user/bounties', axiosFetcher);

  return {
    bounties: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useUserCompletedBounties = () => {
  const { get } = useApi();
  const axiosFetcher = (url) => get(url);
  const { data, error } = useSWR('/user/completed', axiosFetcher);

  return {
    bounties: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useUserData = () => {
  const { get } = useApi();
  const axiosFetcher = (url) => get(url);
  const { data, error, mutate } = useSWR('/user', axiosFetcher);

  return {
    userData: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export const useFeaturedBounties = () => {
  const { get } = useApi();
  const axiosFetcher = (url) => get(url);
  const { data, error } = useSWR('/bounty/featured', axiosFetcher);

  return {
    bounties: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useRepositories = () => {
  const { get } = useApi();
  const axiosFetcher = (url) => get(url);
  const { data, error } = useSWRImmutable('/repo', axiosFetcher);

  return {
    repos: data,
    isLoading: !error && !data,
    error: error,
  };
};

export const useIssues = (repoName) => {
  const url = repoName ? `/repo/${repoName}/issues` : null;
  const { get } = useApi();
  const axiosFetcher = (url) => get(url);
  const { data, error } = useSWRImmutable(url, axiosFetcher);

  return {
    issues: data,
    isLoading: !error && !data && repoName,
    error: error,
  };
};

export const useCryptoPrices = () => {
  const url = `/crypto/prices`;
  const { get } = useApi();
  const axiosFetcher = (url) => get(url);
  const { data, error } = useSWRImmutable(url, axiosFetcher);

  return {
    cryptoPrices: data,
    isLoading: !error && !data,
    error: error,
  };
};
