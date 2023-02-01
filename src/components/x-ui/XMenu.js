/* 
Компонент XMenu
*/

import { nanoid } from 'nanoid'
import React, { useState } from "react";
import "./css/XMenu.css";
import XButton from './XButton';
const isXMenuFeatureEnabled = true // переключите в состояние true чтобы включить

function XMenuButton ({button, onc}) {
    if (button["xmenu"]) {
        return <XMenu button={<XButton text={button["title"]} icon={button["icon"]} is_xmenu={true}/>} dropdown={button["xmenu"]} action="hover"/>
    }
    else {
        return <XButton text={button["title"]} icon={button["icon"]} onClick={() => {onc(); button["action"]();}} />
    }
}

const XMenuDropdown = ({content, horizontal, onc}) => {
    return <div className={"x-menu-dropdown " + (horizontal? "x" : "y")}>
            <div className="x-menu-dropdown-content">
                {content.map(button => <XMenuButton button={button} key={nanoid()} onc={onc} />)}
            </div>
        </div>
}

function ToggleActive (state, setter) {
    switch (state) {
        case false:
            setter(true)
            break;
        case true:
            setter(false)
            break;
        default:
            setter(true)
            break;

    }
}

function XMenu({button, dropdown=null, rightAlign=false, action="click", horizontal=false}) {
    const [isActive, setActive] = useState(false); // нажата ли кнопка
    var click = null;
    var hover = null;

    switch (action) { // проверка типа действия
        case "click": // меню вылезает через нажатие ЛКМ
            click = () => ToggleActive(isActive, setActive);
            break;
        case "hover": // меню вылезает через касание курсором
            hover = () => setActive(true); 
            break;
        default:
            click = () => ToggleActive(isActive, setActive); 
            break;
    }
    let xmenu_button = React.cloneElement(button, {onClick: () => ToggleActive(isActive, setActive)})
    // isXMenuFeatureEnabled - выключатель функции на глобальном уровне
    // dropdown - список всех кнопок в меню.
    if (isXMenuFeatureEnabled && dropdown) {
        return <div className={"x-menu " + (isActive ? "active" : "deactivated") + (rightAlign ? " rightAlign" : "")} 
                    onClick={click}
                    onMouseEnter={hover}
                    onMouseLeave={() => setActive(false)} 
                    >
                {xmenu_button}
                <XMenuDropdown content={dropdown} horizontal={horizontal} onc={() => setActive(false)}/>
            </div>
    }
    
    return button
}

export default XMenu;