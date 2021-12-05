import Router from "next/router";
import { useEffect } from "react";
import { authService } from "@/services/auth.service"


export default function OAuth2RedirectHandler() {

    useEffect(() => {
        const { query } = Router
        if (query.token) {
            authService.signIn(query.token)
            Router.push("/dashboard")
        } else {
            Router.push("/")
        }
    });

    return null
}