import Router from "next/router";
import { useEffect } from "react";

export default function OAuth2RedirectHandler() {

    useEffect(() => {
        const { query } = Router
        if (query.token) {
            localStorage.setItem("ACCESS_TOKEN", query.token);
            Router.push("/dashboard")
        } else {
            Router.push("/")
        }
    });

    return null
}