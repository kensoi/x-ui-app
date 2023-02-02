import "./scss/x-dropdown.scss";
import { CheckValue } from "./Utils";
import { nanoid } from 'nanoid'
import React, { useState } from "react";
import XButton from './XButton';

function XDropdownButton (props) {
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

function XDropdownContent (props) {
    return <div className={`x-dropdown-content ${props.listDirection}`}>
            <div className="x-dropdown-list">
                {props.dropdownListContent.map(button => <XDropdownButton button={button} key={nanoid()} onClick={props.onClick} alignBy={props.alignBy} />)}
            </div>
        </div>
}

function XDropdown(props) {
    const [state, setState] = useState(false);

    let onClick;
    let onMouseEnter;
    let onDone = () => setState(false); 

    let alignBy = CheckValue(props.alignBy, "right", "left");
    let listDirection = CheckValue(props.listDirection, "row", "column");

    switch (props.openOn) {
        case "hover":
            onMouseEnter = () => setState(true); 
            break;

        default:
            onClick = () => setState(true); 
            break;
    }

    if (!props.dropdownListContent) {
        return props.children
    }

    return <div className={`x-dropdown ${state ? "opened" : "closed"} align-${alignBy}`}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onDone}>
            {props.children}
            <XDropdownContent
                dropdownListContent={props.dropdownListContent} 
                listDirection={listDirection} 
                onClick={onDone} 
                alignBy={props.alignBy}/>
        </div>
}

export default XDropdown;