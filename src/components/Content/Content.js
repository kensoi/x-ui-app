

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
            Card Response: {JSON.stringify(props.toolkit.formCard.response)}
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
                <Panel icon={<AppShortcutIcon/>} onClick = {()=> props.toolkit.formCard.showLayout("hello")} title="Открыть приветствие" />
                <Panel icon={<HowToRegIcon/>} onClick = {()=> props.toolkit.formCard.showLayout("register")} title="Зарегистрироваться" />
                <Panel icon={<LoginIcon/>} onClick = {()=> props.toolkit.formCard.showLayout("login")} title="Авторизироваться" />
                <Panel icon={<SettingsIcon/>} onClick = {()=> props.toolkit.formCard.showLayout("settings")} title="Настройки" />
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
                <XButton onClick = {()=> props.toolkit.formCard.showLayout("slider")}>
                    Тестовый ползунок 
                </XButton>
            </Paragraph>
            <Paragraph>
                <XButton onClick = {()=> props.toolkit.formCard.showLayout("dropdown")}>
                    Тестовый выпадающий список 
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