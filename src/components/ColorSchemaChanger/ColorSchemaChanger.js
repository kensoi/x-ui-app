/* Color Schema Menu Selector */
import React from "react";

/* WEB-X-UI components */
import {XButton, XDropdown} from "../XForms/XForms";

/* Material UI icons */
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TuneIcon from '@mui/icons-material/Tune';

class ColorSchemaChanger extends React.Component {
    constructor (props) {
        super(props)
        this.actualSchema = this.props.toolkit.colorSchema;
        this.icons = {
            "light": <LightModeIcon/>,
            "dark": <NightlightIcon/>,
            "pink": <TuneIcon/>,
            "auto": <AutoAwesomeIcon/>,
            "custom": <TuneIcon/>
        }
        this.dropdown = [
            {  
                "icon": this.icons["light"], 
                "title": "Светлая",
                "action": () => {this.props.toolkit.setColorSchema("light")},
            },
            {
                "icon": this.icons["dark"], 
                "title": "Тёмная",
                "action": () => {this.props.toolkit.setColorSchema("dark")},
            },
            {
                "icon": this.icons["auto"], 
                "title": "Системная",
                "action": () => {this.props.toolkit.setColorSchema("auto")},
            },
            {
                "icon": this.icons["custom"], 
                "title": "Кастомная",
                "x-dropdown": [
                    {  
                        "icon": this.icons["custom"], 
                        "title": "Розовая",
                        "action": () => {this.props.toolkit.setColorSchema("pink")},
                    },
                ]
            },
        ]
        this.actualSchemaIcon = this.icons[this.actualSchema];
        this.align = this.props.align || "left"
    }

    render () {
        return <XDropdown dropdown={this.dropdown} align={this.align}>
            <XButton icon={this.actualSchemaIcon} isDropdown={true}/>
        </XDropdown>
    }
}



export default ColorSchemaChanger;