import { parseCookies } from 'nookies'

export const fetcher = url => fetch(process.env.NEXT_PUBLIC_EXTERNAL_API_URL + url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
    }
}).then(res => res.json())


const getAccessToken = () => {
    return parseCookies().token
}