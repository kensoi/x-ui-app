import React from "react";
import "./scss/x-dropdown.scss";
import { nanoid } from "nanoid";
import XButton from "../XButton/XButton";
import { CheckValue } from "../../../../shared/Utils";

export class XDropdown extends React.Component {
    state = {
        dropdown: Array.from(this.props.dropdown),
        wonderbread: false, // открытость-закрытость
        align: CheckValue(this.props.align, "right", "left"),
        listDirection: CheckValue(this.props.listDirection, "row", "column"),
        overflow: false,
    }

    button = (button) => {
        const icon = button["icon"]
        const title = button["title"]
        const dropdown = button["x-dropdown"]

        if (dropdown) {
            return <XDropdown key={nanoid()} dropdown={dropdown} listDirection={this.props.listDirection} align={this.state.align}>
                <XButton icon={icon} title={title} isDropdown={true}/>
            </XDropdown>
        }
        else {
            const action = button["action"];
            const wrappedButtonAction = () => {
                action(); 
                this.close();
            };
            return <XButton key={nanoid()} icon={icon} title={title} onClick={wrappedButtonAction}/>
        }

    }
    
    onClickToToggle = () => {
        if (this.state.wonderbread) {
            this.setState({
                wonderbread: false,
            })
            setTimeout(() => {
                this.setState({overflow: false})
            }, 100)
        }
        else {
            setTimeout(() => {
                this.setState({
                    wonderbread: true,
                })
            }, 100)
            this.setState({overflow: true})

        }
    }
    
    close = () => {
        this.setState({
            wonderbread: false,
        })
        setTimeout(() => {
            this.setState({overflow: false})
        }, 100)
    }


    XDropdownContent = () => {
        return <div className={`x-dropdown-content ${this.state.listDirection}`}>
                <div className="x-dropdown-list"
                    onMouseLeave={this.close} >
                    {this.state.dropdown.map(this.button)}
                </div>
            </div>
    }
    ChildButton = () => {
        return this.props.children
    }
    
    render () {
        return <div className={`x-dropdown ${this.state.wonderbread ? "opened" : "closed"} align-${this.state.align}`}>
            <div className="x-dropdown-clickarea" onClick={this.onClickToToggle}><this.ChildButton /></div>
            {this.state.overflow ? <this.XDropdownContent /> : ""}
        </div>
    }
}

export default XDropdown;