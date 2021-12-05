import jwt_decode from 'jwt-decode';

const AUTH_COOKIE_NAME = "prh-auth"

const signIn = (accessToken) => {
    setCookie(AUTH_COOKIE_NAME, accessToken)
}

const logout = () => {
    deleteCookie(AUTH_COOKIE_NAME, "/")
}

const isUserSignedIn = () => {
    const accessToken = getCookie(AUTH_COOKIE_NAME)
    console.log("Access token value: " + accessToken)
    if(accessToken != ''){
        return isTokenValid(accessToken);
    } else{
        return false;
    }
}

const getAccessToken = () => {
    return getCookie(AUTH_COOKIE_NAME)
}

const isTokenValid = (accessToken) => {
    var decodedToken = jwt_decode(accessToken);
    var now = (new Date().getTime() / 1000);
    return !(decodedToken?.exp < now)
}

const setCookie = (name, value, days = 7, path = '/') => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
}

const getCookie = (name) => {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=')
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')
}

const deleteCookie = (name, path) => {
    setCookie(name, '', -1, path)
}

export const authService = {
    signIn,
    logout, 
    isUserSignedIn,
    getAccessToken
};