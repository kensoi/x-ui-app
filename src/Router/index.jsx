import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"

import routesProps from "./routesProps"


export default function () {
    const toolkit = useToolKit()

    if (toolkit.settings.language === "unset" & window.location.pathname !== "/language") {
        window.localStorage.setItem("get-cache", window.location.href)
        window.location.pathname = "/language"
    }

    return <BrowserRouter>
        <Routes>
            {
                routesProps.map(
                    props => <Route key={nanoid()} {...props} />
                )
            }
        </Routes>
    </BrowserRouter>
}