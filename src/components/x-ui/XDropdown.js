import "./scss/x-dropdown.scss";
import { CheckValue } from "./Utils";
import { nanoid } from 'nanoid'
import React, { useState, useRef} from "react";
import XButton from './XButton';

function XDropdownButton (props) {
    let onButtonClick = props.button["action"]
    let icon = props.button["icon"]
    let title = props.button["title"]
    let XDropdownObj = props.button["x-dropdown"]
    let overflow = props.overflow
    if (!overflow) {
        return
    }
    if (XDropdownObj) {
        return <XDropdown dropdownListContent={XDropdownObj} alignBy={props.alignBy}>
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
                onClick={() => {
                        props.onClick(); onButtonClick();
                    }
                }>
            {title}
        </XButton>
    }
}

class XDropdown extends React.Component {
    state = {
        dropdownListContent: Array.from(this.props.dropdownListContent),
        wonderbread: false, // открытость-закрытость
        alignBy: CheckValue(this.props.alignBy, "right", "left"),
        listDirection: CheckValue(this.props.listDirection, "row", "column"),
        overflow: false,
    }
    
    onClickToToggle = () => {
        if (this.state.wonderbread) {
            this.setState({
                wonderbread: false,
            })
            setTimeout(() => {
                console.log("done!")
                this.setState({overflow: false})
            }, 100)
        }
        else {
            this.setState({
                wonderbread: true,
                overflow: true,
            })

        }
    }
    
    onMouseLeave = () => {
        this.setState({
            wonderbread: false,
        })
        setTimeout(() => {
            console.log("done!")
            this.setState({overflow: false})
        }, 100)
    }


    XDropdownContent = () => {
        return <div className={`x-dropdown-content ${this.state.listDirection}`}>
                <div className="x-dropdown-list"
                    onMouseLeave={this.onMouseLeave} >
                    {
                        this.state.dropdownListContent.map(button => <XDropdownButton button={button} key={nanoid()} overflow={this.state.overflow} onClick={
                            () => {
                                this.setState({
                                    wonderbread: false,
                                })
                            }} alignBy={this.state.alignBy} />)}
                </div>
            </div>
    }
    ChildButton = () => {
        return this.props.children
    }
    
    render () {
        return <div className={`x-dropdown ${this.state.wonderbread ? "opened" : "closed"} align-${this.state.alignBy}`}>
            <div className="x-dropdown-clickarea" onClick={this.onClickToToggle}></div>
            <this.ChildButton />
            {this.state.overflow ? <this.XDropdownContent /> : ""}
        </div>
    }
}

export default XDropdown;