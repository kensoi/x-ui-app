

import "./components/webx/scss/app-content.scss";
import {XList} from "./components/webx/Separators";
import {XButton} from "./components/webx/XForms";
import {Headline, XBlock} from "./components/webx/XBlock";
import Teaser from "./components/WebXUI";

import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import Icon from "./components/Icons";

function AppContent (props) {
    return <div className="app-content">
        <XBlock>
            <Teaser />
        </XBlock>
        {
            props.toolkit.cardResponse ? 
            <XBlock>
                {JSON.stringify(props.toolkit.cardResponse)}
            </XBlock>
            : ""
        }
        <XBlock>
            <Headline>
                Примеры форм
            </Headline>
            <XList>
                <Icon icon={<AppShortcutIcon/>} onClick = {()=> props.toolkit.openCard("hello")} title="Открыть приветствие" />
                <Icon icon={<HowToRegIcon/>} onClick = {()=> props.toolkit.openCard("register")} title="Зарегистрироваться" />
                <Icon icon={<LoginIcon/>} onClick = {()=> props.toolkit.openCard("login")} title="Авторизироваться" />
                <Icon icon={<SettingsIcon/>} onClick = {()=> props.toolkit.openCard("settings")} title="Настройки" />
            </XList>
        </XBlock>
        <XBlock>
            <Headline>
                Тестовые компоненты
            </Headline>
            <XList>
                <XButton onClick = {()=> props.toolkit.openCard("slider")}>
                    Тестовый ползунок 
                </XButton>
                <XButton onClick = {()=> props.toolkit.openCard("tumbler")}>
                    Тестовый переключатель 
                </XButton>
            </XList>
        </XBlock>
    </div>
}

export default AppContent;