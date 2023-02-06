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
        // {
        //     "icon": <TuneIcon/>, 
        //     "title": "Кастомная",
        //     "x-dropdown": [
        //         {  
        //             "icon": <TuneIcon/>, 
        //             "title": "Розовая",
        //             "action": () => {props.toolkit.setColorSchema("pink")},
        //         },
        //     ]
        // },
    ]
}