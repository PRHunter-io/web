import useSWR from "swr"

const { fetcher } = require("./fetcher")

export const useUserBounties = () => {
    const { data, error } = useSWR("/user/bounties", fetcher)

    return {
        bounties: data,
        isLoading: !error && !data,
        isError: error
      }
}

export const useUserData = () => {
  const { data, error } = useSWR("/user", fetcher)

    return {
        userData: data,
        isLoading: !error && !data,
        isError: error
      }
}