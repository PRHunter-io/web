import useSWR from "swr"
import useSWRImmutable from 'swr/immutable'

const { fetcher } = require("./fetcher")

export const useUserBounties = () => {
    const { data, error } = useSWR("/user/bounties", fetcher)

    return {
        bounties: data,
        isLoading: !error && !data,
        isError: error
      }
}

export const useUserCompletedBounties = () => {
  const { data, error } = useSWR("/user/completed", fetcher)

  return {
    bounties: data,
    isLoading: !error && !data,
    isError: error
  }
}

export const useUserData = () => {
  const { data, error, mutate } = useSWR("/user", fetcher)

    return {
        userData: data,
        isLoading: !error && !data,
        isError: error,
        mutate
      }
}

export const useFeaturedBounties = () => {
  const { data, error } = useSWR("/bounty/featured", fetcher)

  return {
      bounties: data,
      isLoading: !error && !data,
      isError: error
    }
}

export const useRepositories = () => {
  const { data, error } = useSWRImmutable("/repo", fetcher)

  return {
      repos: data,
      isLoading: !error && !data,
      error: error
    }
}

export const useIssues = (repoName) => {
  const url = (repoName ? `/repo/${repoName}/issues` : null)
  const { data, error } = useSWRImmutable(url, fetcher)

  return {
      issues: data,
      isLoading: !error && !data,
      error: error
    }
}