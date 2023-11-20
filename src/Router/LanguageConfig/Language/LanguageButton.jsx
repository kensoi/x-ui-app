import {
    Button
} from "@webx/components"
import { Fragment } from "react"

import {
    useLanguage
} from "../Context"


export default function ({ selectedLanguage }) {
    const [language, setLanguage] = useLanguage()

    const props = {
        theme: "menu",
        title: selectedLanguage.title,
        onClick: () => {
            setLanguage(selectedLanguage.name)
        }
    }

    if (language !== "unset" && selectedLanguage.name == "unset") {
        return <Fragment />
    }

    return <Button {...props} />
}
