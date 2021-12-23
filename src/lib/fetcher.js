import { parseCookies } from 'nookies'

export const fetcher = async url => {
    const res = await fetch(process.env.NEXT_PUBLIC_EXTERNAL_API_URL + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getAccessToken()
        }
    });
    if(!res.ok){
        const error = new Error('An error occurred while fetching the data')
        // Attach extra info to the error object.
        console.error(error)
        error.info = await res.json()
        throw error
    }
    return await res.json()
}


const getAccessToken = () => {
    return parseCookies().token
}