
import Panel from "../../Panel/Panel";

import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import XBlock, { Headline, XList } from "../../XBlock/XBlock";


export default function Index(props) {
    return (
      <>
        <XBlock>
          <Headline>Примеры форм</Headline>
          <XList>
            <Panel
              icon={<AppShortcutIcon />}
              onClick={() => props.toolkit.showCard("hello")}
              title="Приветствие"
            />
            <Panel
              icon={<HowToRegIcon />}
              onClick={() => props.toolkit.showCard("register")}
              title="Регистрация"
            />
            <Panel
              icon={<LoginIcon />}
              onClick={() => props.toolkit.showCard("login")}
              title="Войти"
            />
            <Panel
              icon={<SettingsIcon />}
              onClick={() => props.toolkit.showCard("settings")}
              title="Настройки"
            />
          </XList>
        </XBlock>
      </>
    );
  }