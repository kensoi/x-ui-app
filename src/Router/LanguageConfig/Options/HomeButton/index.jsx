import { 
    Fragment
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/components"

import titleLang from "./languages"

import {
    useLanguage
} from "../../Context"


export default function () {
    const toolkit = useToolKit()
    const [language, _] = useLanguage()
    

    if (language === "unset") {
        return <Fragment />
    }

    const props = {
        title: titleLang[language],
        onClick: () => {
            toolkit.settings.language = language
            window.location.href = window.localStorage.getItem("get-cache")
        }
    }

    return <Button {...props} />
}
