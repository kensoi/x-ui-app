

import "./components/x-ui/scss/app-content.scss";
import { XSlider } from "./components/x-ui/XSlider";
import { XList } from "./components/x-ui/XList";
import { XField } from "./components/x-ui/XField";
import XButton from "./components/x-ui/XButton";
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
        <XList>
            <XButton 
                    onClick={() => ToggleState(props.toolkit.enableHeader, props.toolkit.setHeaderState)}>
                toggle Header
            </XButton>
            <XButton 
                    onClick={() => ToggleState(props.toolkit.enableFooter, props.toolkit.setFooterState)}>
                toggle Footer
            </XButton>
            <XButton 
                    onClick={() => props.toolkit.setCardArticleState(true)}>
                toggle Note
            </XButton>
        </XList>
        <XList>
            <XSlider value={0} min={1} max={100}/>
            <XField field={field} setField={setField}>
                Type here anything
            </XField>
        </XList>
    </div>
}