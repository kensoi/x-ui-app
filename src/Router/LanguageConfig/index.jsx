import {
    useEffect
} from "react"

import { useToolKit } from "@webx/toolkit"


import Headline from "./Logo"
import HomeButton from "./Options"
import Language from "./Language"

import "./stylesheet.scss"

import {
    LanguageContext
} from "./Context"
import { Card, Content, Grid, Label } from "@webx/components"
import languages from "./languages"


export default function () {
    const toolkit = useToolKit()

    useEffect(
        () => {
            document.title = "??? / miuruwa"
        }, []
    )

    return <div className="app">
        <Card className="content">
            <Headline />
            <LanguageContext>
                <Content className="text">
                    <h3>
                        <nobr>
                            Select language /
                        </nobr>
                        <nobr>
                            Выберите язык
                        </nobr>
                    </h3>
                    <Grid>
                        <Language />
                    </Grid>
                </Content>
                <HomeButton />
            </LanguageContext>
        </Card>
    </div>
}