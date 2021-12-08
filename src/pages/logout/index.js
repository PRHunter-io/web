import { authService } from "@/services/auth.service";
import Router from "next/router";
import { useEffect } from "react";

export default function Logout() {

    useEffect(() => {
        authService.logout()
        Router.push("/")
    }, [])

    return null
}