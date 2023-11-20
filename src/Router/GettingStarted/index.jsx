import { Card, Content } from "@webx/components"
import Options from "./Options"
import Logo from "./Logo"
import Top from "./Top"

import "./stylesheet.scss"

export default function () {
    // When you trying to open settings an error appears
    // Solution -> Open local storage and add key "language" with value = "ru" or "eng"
    // Or realise language config on start :)
    
    return <div className="app">
        <Card className="content">
            <Top />
            <Logo />
            <Content className="text">
                <h2>
                    WebX Getting Started
                </h2>
                <p>
                    Hello world!
                </p>
            </Content>
            <Options />
        </Card>
    </div>
}
