

import "./scss/content.scss";
import { XButton } from "../XForms/XForms";
import XBlock, { Headline, XList } from "../XBlock/XBlock";
import Panel from "../Panel/Panel";

import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

function AppContent (props) {
    return <div className="app-content">
        {
            props.toolkit.cardResponse ? 
            <XBlock>
                Form Card Response: {JSON.stringify(props.toolkit.cardResponse)}
            </XBlock>
            : ""
        }
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
        <XBlock>
            <Headline>
                Тестовые компоненты
            </Headline>
            <XList>
                <XButton onClick = {()=> props.toolkit.formCard.showLayout("slider")}>
                    Тестовый ползунок 
                </XButton>
                <XButton onClick = {()=> props.toolkit.formCard.showLayout("tumbler")}>
                    Тестовый переключатель 
                </XButton>
            </XList>
        </XBlock>
    </div>
}

export default AppContent;