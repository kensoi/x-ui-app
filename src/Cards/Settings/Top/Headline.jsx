import { useToolKit } from "@webx/toolkit";
import languages from "../languages";

export default function () {
    const toolkit = useToolKit();
    const actualLanguage = languages[toolkit.settings.language];

    return <h4>
        {actualLanguage.title}
    </h4>;
}
