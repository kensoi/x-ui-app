/* Color Schema Menu Selector */
import React from "react";

/* WEB-X-UI components */
import {XButton, XDropdown} from "../../XForms/XForms";

/* Material UI icons */
import MenuIcon from '@mui/icons-material/Menu';

import TextFieldsIcon from '@mui/icons-material/TextFields';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TuneIcon from '@mui/icons-material/Tune';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoDevIcon from '@mui/icons-material/LogoDev';

class MenuButton extends React.Component {
    constructor (props) {
        super(props)
        this.dropdown = [
            {  
                "icon": <HelpOutlineIcon/>,
                "title": "Как работать",
                "action": () => {window.location.pathname = "/get-started/"},
            },
            {
                "icon": <GridViewIcon/>,
                "title": "Компоненты",
                "action": () => {window.location.pathname = "/components/"},
                "x-dropdown": [
                    {  
                        "icon": <AddBoxIcon />,
                        "title": "XButton",
                        "action": () => {window.location.pathname = "/components/xbutton"},
                    },
                    {  
                        "icon": <ArrowDropDownCircleIcon />,
                        "title": "XDropdown",
                        "action": () => {window.location.pathname = "/components/xdropdown"},
                    },
                    {  
                        "icon": <TextFieldsIcon />,
                        "title": "XField",
                        "action": () => {window.location.pathname = "/components/xfield"},
                    },
                    {  
                        "icon": <TuneIcon />,
                        "title": "XSlider",
                        "action": () => {window.location.pathname = "/components/xslider"},
                    },
                    {  
                        "icon": <ToggleOnIcon />,
                        "title": "XTumble",
                        "action": () => {window.location.pathname = "/components/xtumble"},
                    },
                ]
            },
            {
                "icon": <LogoDevIcon />,
                "title": "Github",
                "action": () => {window.location.href = "https://github.com/kensoi/"},
            },
        ]
    }

    getSchemaButton = item => {
        if (item["x-dropdown"] !== undefined) {
            const dropdown = item["x-dropdown"];
            return <XDropdown dropdown={this.dropdownContent(dropdown)} contentPosition={this.props.contentPosition || "bottom-left"}>
                <XButton icon={item["icon"]}>
                    {item["title"]}
                </XButton>
            </XDropdown>
        }
        else {
            return <XButton icon={item["icon"]} onClick={item["action"]}>
                {item["title"]}
            </XButton>
        }
    }

    dropdownContent = (dropdown) => {
        return <> { dropdown.map(this.getSchemaButton) } </>
    }

    render () {
        return <XDropdown 
                dropdown={this.dropdownContent(this.dropdown)} 
                contentPosition={this.props.contentPosition || "bottom-left"}
                listDirection="row">
            <XButton icon={<MenuIcon/>} hideEmptyPaddings={true}/>
        </XDropdown>
    }
}

export default MenuButton;