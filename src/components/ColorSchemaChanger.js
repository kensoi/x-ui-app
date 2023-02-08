/* Color Schema Menu Selector */

/* WEB-X-UI components */
import {XButton, XDropdown} from "./XForms/XForms";

/* Material UI icons */
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TuneIcon from '@mui/icons-material/Tune';

export function List (props) {
    return [
        {  
            "icon": <LightModeIcon/>, 
            "title": "Светлая",
            "action": () => {props.toolkit.setColorSchema("light")},
        },
        {
            "icon": <NightlightIcon/>, 
            "title": "Тёмная",
            "action": () => {props.toolkit.setColorSchema("dark")},
        },
        {
            "icon": <AutoAwesomeIcon/>, 
            "title": "Системная",
            "action": () => {props.toolkit.setColorSchema("auto")},
        },
        {
            "icon": <TuneIcon/>, 
            "title": "Кастомная",
            "x-dropdown": [
                {  
                    "icon": <TuneIcon/>, 
                    "title": "Розовая",
                    "action": () => {props.toolkit.setColorSchema("pink")},
                },
            ]
        },
    ]
}
export const changerButtonData = {
    "light": {
        "icon": <LightModeIcon/>,
        "title": ""
    },
    "dark": {
        "icon": <NightlightIcon/>,
        "title": ""
    },
    "pink": {
        "icon": <TuneIcon/>,
        "title": ""
    },
    "auto": {
        "icon": <AutoAwesomeIcon/>,
        "title": ""
    },
}

function ColorSchemaChanger(props) {
    return <XDropdown dropdownListContent={List(props)} alignBy="right"> 
        <XButton 
                icon={changerButtonData[props.toolkit.colorSchema]["icon"]}
                isDropdown={true}>
            {changerButtonData[props.toolkit.colorSchema]["title"]} 
        </XButton>
    </XDropdown>
}

export default ColorSchemaChanger;