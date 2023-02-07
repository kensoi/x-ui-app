

import "./components/webx/scss/app-content.scss";
import {XList} from "./components/webx/Separators";
import {XButton} from "./components/webx/XForms";
import {XBlock} from "./components/webx/XBlock";
import Teaser from "./components/WebXUI";

function AppContent (props) {
    return <div className="app-content">
        <XBlock>
            <Teaser />
        </XBlock>
        <XBlock>
            <XList>
                <XButton onClick = {()=> props.toolkit.openCard(props.toolkit.cardLayouts.settings)}>
                    Открыть настройки 
                </XButton>
                <XButton onClick = {()=> props.toolkit.openCard(props.toolkit.cardLayouts.hello)}>
                    Открыть приветствие 
                </XButton>
                <XButton onClick = {()=> props.toolkit.openCard(props.toolkit.cardLayouts.register)}>
                    Открыть форму регистрации 
                </XButton>
                <XButton onClick = {()=> props.toolkit.openCard(props.toolkit.cardLayouts.tumblet)}>
                    Открыть проверку тумблета 
                </XButton>
            </XList>
        </XBlock>
    </div>
}

export default AppContent;