/* */

import XMenu from "./XMenu";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import XButton from "./XButton";

function ColorSchemaChanger({toolkit}) {
    const ChangerButtonData = {
        "l": {
            "icon": <LightModeIcon/>,
            "title": ""
        },
        "d": {
            "icon": <NightlightIcon/>,
            "title": ""
        },
        "r": {
            "icon": <AutoAwesomeIcon/>,
            "title": ""
        },
        "a": {
            "icon": "",
            "title": "AUTO"
        },
    }

    const List = [
        {  
            "icon": <LightModeIcon/>,
            "title": "Светлая",
            "action": () => {toolkit.setColorSchema("l")},
        },
        {
            "icon": <NightlightIcon/>,
            "title": "Тёмная",
            "action": () => {toolkit.setColorSchema("d")},
        },
        // {
        //     "icon": <AutoAwesomeIcon/>,
        //     "title": "Розовая",
        //     "action": () => {toolkit.setColorSchema("r")},
        // },
        {
            "icon": <HdrAutoIcon/>,
            "title": "Системная",
            "action": () => {toolkit.setColorSchema("a")},
        },
    ]
    let ChangerButton = <XButton icon={ChangerButtonData[toolkit.colorSchema]["icon"]} text={ChangerButtonData[toolkit.colorSchema]["title"]} is_xmenu={true} />

    return <XMenu button={ChangerButton} dropdown={List} rightAlign={true}/>
}

export default ColorSchemaChanger;