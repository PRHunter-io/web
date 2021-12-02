import Router from "next/router";
import { useContext, useEffect } from "react";
import GlobalContext from "src/context/GlobalContext";

export default function Logout() {

    const gContext = useContext(GlobalContext)

    useEffect(() => {
        localStorage.removeItem("ACCESS_TOKEN")
        gContext.setSignedIn(false)
        Router.push("/")
    });

    return null
}