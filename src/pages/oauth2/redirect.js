import Router from "next/router";
import { useEffect } from "react";

export default function OAuth2RedirectHandler() {

    const gContext = useContext(GlobalContext);

    useEffect(() => {
        const { query } = Router
        if (query.token) {
            localStorage.setItem("ACCESS_TOKEN", query.token)
            gContext.setSignedIn(true)
            Router.push("/dashboard")
        } else {
            Router.push("/")
        }
    });

    return null
}