

import "./components/x-ui/scss/app-content.scss";
import {XList} from "./components/x-ui/Separators";
import XButton from "./components/x-ui/XButton";
import XBlock from "./components/x-ui/XBlock";

export function AppContent (props) {
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