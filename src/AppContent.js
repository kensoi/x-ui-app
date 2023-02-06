

import "./components/x-ui/scss/app-content.scss";
import {XList} from "./components/x-ui/Separators";
import XButton from "./components/x-ui/XButton";
import XBlock from "./components/x-ui/XBlock";
import { useState } from "react";

function ToggleState (state, setstate) {
    switch (state) {
        case false: setstate(true); break;
        default: setstate(false);
    }
}

export function AppContent (props) {
    const [field, setField] = useState("");
    return <div className="app-content">
        <XBlock>
            <XList>
                <XButton onClick = {()=> props.toolkit.openCard(props.toolkit.cardLayouts.settings)}>
                    Открыть настройки 
                </XButton>
                <XButton onClick = {()=> props.toolkit.openCard(props.toolkit.cardLayouts.register)}>
                    Открыть форму регистрации 
                </XButton>
            </XList>
        </XBlock>
    </div>
}