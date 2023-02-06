import "./scss/header.scss";

import XButton from "./x-ui/XButton";
import XDropdown from "./x-ui/XDropdown";
import MenuList from "./MenuList";
import HeaderLogo from "./Logo";
import MenuIcon from '@mui/icons-material/Menu';

export function Header (props) {
    if (props.toolkit.enableHeader) {
        return (
            <div className="header dark">
                <div className="header-content">
                    <div className="header-buttons">
                        <XDropdown dropdownListContent={MenuList}>
                            <XButton icon={<MenuIcon/>} />
                        </XDropdown>
                        <HeaderLogo />
                    </div>
                </div>
            </div>
        )
    }
}