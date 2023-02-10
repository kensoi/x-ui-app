import "./scss/header.scss";
import MenuButton from "./components/MenuButton";

function HeaderLogo (props) {
    return <div className="header-logo">
        WebCrossUI
    </div>
}

function Header (props) {
    if (props.toolkit.enableHeader) {
        return (
            <div className="header">
                <div className="header-content">
                    <div className="header-buttons">
                        <MenuButton />
                        <HeaderLogo />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;