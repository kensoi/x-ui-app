
import "./scss/Header.scss";
import ThemeChanger from "./ThemeChanger";
import XButton from "./XButton";
import XMenu from "./XMenu";
import MenuIcon from '@mui/icons-material/Menu';

function HeaderLogo (props) {
    return <div className="header-logo">
        X-UI шаблон
    </div>
}

export function Header (props) {
    const MenuList = [
        {  
            // "icon": <LightModeIcon/>,
            "title": "Документация",
            "action": () => {window.location.pathname = "/documentation/"},
        },
        {
            "title": "Компоненты",
            "action": () => {window.location.pathname = "/components/"},
        },
        {
            "title": "Github",
            "action": () => {window.location.href = "https://github.com/kensoi/"},
        },
    ]
    let MenuButton = <XButton icon={<MenuIcon/>} />
    let Menu = <XMenu button={MenuButton} dropdown={MenuList}/>
    if (props.toolkit.enableHeader) {
        return (
            <div className="header dark">
                <div className="header-content">
                    <div className="header-buttons">
                        {Menu}
                        <HeaderLogo />
                    </div>
                    <ThemeChanger toolkit={props.toolkit}/>
                </div>
            </div>
        )
    }
}