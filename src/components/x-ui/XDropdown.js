/* XDropdown */

/* X-UI components */
import "./scss/x-dropdown.scss";
import XButton from './XButton';

/* React Libraries */
import { nanoid } from 'nanoid'
import React, { useEffect, useState, useRef } from "react";

const isXMenuFeatureEnabled = true // переключите в состояние true чтобы включить

function XMenuButton (props) {
    let onButtonClick = props.button["action"]
    let icon = props.button["icon"]
    let title = props.button["title"]
    let XDropdownObj = props.button["x-dropdown"]

    if (XDropdownObj) {
        return <XDropdown dropdownListContent={XDropdownObj} action="hover" alignBy={props.alignBy}>
            <XButton 
                    icon={icon} 
                    isDropdown={true}>
                {title}
            </XButton>
        </XDropdown>
    }
    else {
        return <XButton 
                icon={icon} 
                onClick={() => {props.onClick(); onButtonClick();}}>
            {title}
        </XButton>
    }
}

const XMenuDropdown = (props) => {
    // {content, horizontal, onc}
    // {dropdownListContent, listDirection, onClick}
    return <div className={`x-dropdown-content ${props.listDirection}`}>
            <div className="x-dropdown-list">
                {props.dropdownListContent.map(button => <XMenuButton button={button} key={nanoid()} onClick={props.onClick} alignBy={props.alignBy} />)}
            </div>
        </div>
}

function ToggleBool (state, setState) {
    switch (state) {
        case true:
            setState(false)
            break;

        default: // = true
            setState(true)
            break;

    }
}

function XDropdown(props) {
    // Выпадающий список
    // Старые аргументы: {button, dropdown, rightAlign, action, horizontal}
    // Новые аргументы: {children, dropdownListContent, alignBy, openOn, listDirection}
    // isXMenuFeatureEnabled - выключатель функции на глобальном уровне

    const [state, setState] = useState(false); // раскрыт ли список
    let onClick;
    let onMouseEnter;
    let onDone = () => setState(false); 

    let alignBy; // выравнивать по левой или правой грани кнопки, по нажатии которой раскрывается список
    let listDirection; // ориентирование списка по колонне или строке

    switch (props.alignBy) {
        case "right":
            alignBy = "right";
            break;

        default: // = "left"
            alignBy = "left";
    }

    switch (props.listDirection) {
        case "row":
            listDirection = "row";
            break;

        default: // "column"
            listDirection = "column";

    }

    switch (props.openOn) { // проверка типа действия
        case "hover": // меню вылезает через касание курсором
            onMouseEnter = () => setState(true); 
            break;

        default: // меню вылезает через нажатие ЛКМ = "click"
            onClick = () => setState(true); 
            break;
    }

    if (!props.dropdownListContent || !isXMenuFeatureEnabled) {
        return props.children
    }

    let dropdownListContent = props.dropdownListContent.map(item => {
        return {
            "icon": item["icon"], 
            "title": item["title"], 
            "action": () => {
                if (state) {
                    item["x-dropdown"]()
                    if (item["x-dropdown"]) {
                        setState(false);
                    }
                }
            }, 
            "x-dropdown": item["x-dropdown"]
        }
    })


    return <div className={`x-dropdown ${state ? "opened" : "closed"} align-${alignBy}`}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onDone}>
            {props.children}
            <XMenuDropdown dropdownListContent={props.dropdownListContent} listDirection={listDirection} onClick={onDone} alignBy={props.alignBy}/>
        </div>
}

export default XDropdown;