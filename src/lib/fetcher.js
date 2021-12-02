export const fetcher = url => fetch(process.env.NEXT_PUBLIC_EXTERNAL_API_URL + url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
    }
}).then(res => res.json())

const getAccessToken = () => {
    const tokenOpt = localStorage.getItem('ACCESS_TOKEN')
    if(tokenOpt !== null){
        return tokenOpt
    }else return ""
}