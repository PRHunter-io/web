import { authService } from "@/services/auth.service";
import Router from "next/router";

export default function Logout() {

    authService.logout()
    Router.push("/")

    return null
}