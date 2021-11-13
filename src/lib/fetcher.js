export const fetcher = url => fetch(process.env.NEXT_PUBLIC_EXTERNAL_API_URL + url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
    }
}).then(res => res.json())