import { Content } from "@webx/components"
import Components from "./Components"
import Settings from "./Settings"

import "./stylesheet.scss"


export default function () {
    return <Content className="options">
        <Components />
        <Settings />
    </Content>
}

