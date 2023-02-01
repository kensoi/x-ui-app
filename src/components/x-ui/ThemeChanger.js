/* */

import XMenu from "./XMenu";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import XButton from "./XButton";


function ThemeChanger({toolkit}) {
    const ThemeModeICON = {"l": {
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
    const ThemeModeList = [
        {  
            "icon": <LightModeIcon/>,
            "title": "Светлая",
            "action": () => {toolkit.setDm("l")},
        },
        {
            "icon": <NightlightIcon/>,
            "title": "Тёмная",
            "action": () => {toolkit.setDm("d")},
        },
        // {
        //     "icon": <AutoAwesomeIcon/>,
        //     "title": "Розовая",
        //     "action": () => {toolkit.setDm("r")},
        // },
        {
            "icon": <HdrAutoIcon/>,
            "title": "Системная",
            "action": () => {toolkit.setDm("a")},
        },
    ]
    let ThemeButton = <XButton icon={ThemeModeICON[toolkit.dm]["icon"]} text={ThemeModeICON[toolkit.dm]["title"]} is_xmenu={true} />

    return <XMenu button={ThemeButton} dropdown={ThemeModeList} rightAlign={true}/>
}

export default ThemeChanger;