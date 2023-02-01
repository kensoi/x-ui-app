/* Color Schema Menu Selector */

/* X-UI components */
import XButton from "./XButton";
import XDropdown from "./XDropdown";

/* Material UI icons */
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TuneIcon from '@mui/icons-material/Tune';

const changerButtonData = {
    "l": {
        "icon": <LightModeIcon/>,
        "title": ""
    },
    "d": {
        "icon": <NightlightIcon/>,
        "title": ""
    },
    "r": {
        "icon": <TuneIcon/>,
        "title": ""
    },
    "a": {
        "icon": <AutoAwesomeIcon/>,
        "title": ""
    },
}

function ColorSchemaChanger(props) {
    const List = [
        {  
            "icon": <LightModeIcon/>, 
            "title": "Светлая",
            "action": () => {props.toolkit.setColorSchema("l")},
        },
        {
            "icon": <NightlightIcon/>, 
            "title": "Тёмная",
            "action": () => {props.toolkit.setColorSchema("d")},
        },
        {
            "icon": <AutoAwesomeIcon/>, 
            "title": "Системная",
            "action": () => {props.toolkit.setColorSchema("a")},
        },
        {
            "icon": <TuneIcon/>, 
            "title": "Кастомная",
            "x-dropdown": [
                {  
                    "icon": <TuneIcon/>, 
                    "title": "Розовая",
                    "action": () => {props.toolkit.setColorSchema("r")},
                },
            ]
        },
    ]

    return <XDropdown dropdownListContent={List} alignBy="right"> 
        <XButton 
                icon={changerButtonData[props.toolkit.colorSchema]["icon"]}
                isDropdown={true}>
            {changerButtonData[props.toolkit.colorSchema]["title"]} 
        </XButton>
    </XDropdown>
}

export default ColorSchemaChanger;