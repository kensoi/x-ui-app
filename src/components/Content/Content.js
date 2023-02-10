

import "./scss/content.scss";
import { XButton } from "../XForms/XForms";
import XBlock, { Headline, Paragraph, XList } from "../XBlock/XBlock";
import Panel from "../Panel/Panel";

import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

function CardResponseBlock (props) {
    if (props.toolkit.cardResponse) {
        return <XBlock>
            Card Response: {JSON.stringify(props.toolkit.cardResponse)}
        </XBlock>
    }
}

function Index (props) {
    return <>
        <CardResponseBlock toolkit={props.toolkit} />
        <XBlock>
            <Headline>
                Примеры форм
            </Headline>
            <XList>
                <Panel icon={<AppShortcutIcon/>} onClick = {()=> console.log("open hello")} title="Приветствие" />
                <Panel icon={<HowToRegIcon/>} onClick = {()=> console.log("open register")} title="Войти" />
                <Panel icon={<LoginIcon/>} onClick = {()=> console.log("open login")} title="Регистрация" />
                <Panel icon={<SettingsIcon/>} onClick = {()=> console.log("open settings")} title="Настройки" />
            </XList>
        </XBlock>
    </>
}

function FormTests (props) {
    return <>
        <CardResponseBlock toolkit={props.toolkit} />
        <XBlock>
            <Headline>
                Тестовые компоненты
            </Headline>
            <Paragraph>
                <XButton onClick = {()=> props.toolkit.showCard("slider")}>
                    Тестовый ползунок 
                </XButton>
            </Paragraph>
        </XBlock>
    </>
}

function AppContent (props) {
    return <div className="app-content">
        <Index toolkit={props.toolkit}/>
        <FormTests toolkit={props.toolkit}/>
    </div>
}

export default AppContent;