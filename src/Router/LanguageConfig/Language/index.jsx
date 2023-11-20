import { Label } from "@webx/components"

import {
    useLanguage
} from "../Context"

import {
    Button,
    Dropdown
} from "@webx/components"

import languages from "./languages"
import LanguageButtonList from "./LanguageButtonList"


export default function () {
    const [language, _] = useLanguage()

    const labelTitle = languages.label[language]
    const actualLanguageID = languages.data.findIndex(item => item.name === language)
    const actualLanguage = languages.data[~actualLanguageID ? actualLanguageID : 0]

    const buttonProps = {
        title: actualLanguage.title,
        isDropdown: true
    }
    const dropdownProps = {
        content: <LanguageButtonList />,
        position: "bottom",
        orientation: "right",
        listDirection: "row",
        children: <Button {...buttonProps} />
    }

    return <>
        <Label>
            {labelTitle}
        </Label>
        <Dropdown {...dropdownProps} />
    </>
}