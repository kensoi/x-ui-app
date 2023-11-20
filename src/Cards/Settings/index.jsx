import { 
    useToolKit
} from "@webx/toolkit"

import { 
    Card, Content, Grid
} from "@webx/components"

import Top from "./Top"
import Icon from "./Icon"
import Options from "./Options"

import Caching from "./Caching"
import Language from "./Language"
import languages from "./languages"

import "./stylesheet.scss"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <form className="settings-card">
        <Card className="settings-content">
            <Top />
            <Icon />
            <Content className="settings-text">
                <h6>
                    {actualLanguage.labels[0]}
                </h6>
                <Grid>
                    <Language />
                    <Caching />
                </Grid>
            </Content>
            <Options />
        </Card>
    </form>
}