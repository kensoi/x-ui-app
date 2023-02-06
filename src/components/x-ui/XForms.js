import "./css/XTumble.css";
import "./scss/x-slider.scss";
import "./scss/x-field.scss";
import "./scss/x-dropdown.scss";
import "./scss/x-button.scss";

import React from "react";
import { nanoid } from 'nanoid'

import { CheckValue, handleChange} from "./Utils";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export class XButton extends React.Component {
    getIcon = () => {
        if (this.props.icon) {
            return <div className="x-button-icon"> {this.props.icon} </div>
        };
    };

    getTitle = () => {
        if (this.props.children) {
            return <div className="x-button-title"> {this.props.children} </div>
        };
    };

    isDropdown = () => {
        if (this.props.isDropdown) {
            return <div className="x-button-dropdown-icon"> <KeyboardArrowDownIcon/> </div>
        };
    };
    render () {
        return <div className="x-button" onClick={this.props.onClick}>
            {this.getIcon()}
            {this.getTitle()}
            {this.isDropdown()}
        </div>
    }
}

export class XDropdown extends React.Component {
    state = {
        dropdownListContent: Array.from(this.props.dropdownListContent),
        wonderbread: false, // открытость-закрытость
        alignBy: CheckValue(this.props.alignBy, "right", "left"),
        listDirection: CheckValue(this.props.listDirection, "row", "column"),
        overflow: false,
    }

    getButton = (button) => {
        const buttonIcon = button["icon"]
        const buttonTitle = button["title"]
        const XDropdownObj = button["x-dropdown"]

        if (XDropdownObj) {
            return <XDropdown key={nanoid()} dropdownListContent={XDropdownObj} listDirection={this.props.listDirection} alignBy={this.state.alignBy}>
                <XButton icon={buttonIcon} isDropdown={true}> {buttonTitle} </XButton>
            </XDropdown>
        }
        else {
            const buttonAction = button["action"];
            const wrappedButtonAction = () => {
                buttonAction(); 
                this.Close();
            };
            return <XButton key={nanoid()} icon={buttonIcon} onClick={wrappedButtonAction}> {buttonTitle} </XButton>
        }

    }
    
    onClickToToggle = () => {
        if (this.state.wonderbread) {
            this.setState({
                wonderbread: false,
            })
            setTimeout(() => {
                // console.log("done!")
                this.setState({overflow: false})
            }, 100)
        }
        else {
            setTimeout(() => {
                // console.log("done!")
                this.setState({
                    wonderbread: true,
                })
            }, 100)
            this.setState({overflow: true})

        }
    }
    
    Close = () => {
        this.setState({
            wonderbread: false,
        })
        setTimeout(() => {
            // console.log("done!")
            this.setState({overflow: false})
        }, 100)
    }


    XDropdownContent = () => {
        return <div className={`x-dropdown-content ${this.state.listDirection}`}>
                <div className="x-dropdown-list"
                    onMouseLeave={this.Close} >
                    {this.state.dropdownListContent.map(this.getButton)}
                </div>
            </div>
    }
    ChildButton = () => {
        return this.props.children
    }
    
    render () {
        return <div className={`x-dropdown ${this.state.wonderbread ? "opened" : "closed"} align-${this.state.alignBy}`}>
            <div className="x-dropdown-clickarea" onClick={this.onClickToToggle}><this.ChildButton /></div>
            {this.state.overflow ? <this.XDropdownContent /> : ""}
        </div>
    }
}

export class XField extends React.Component {
    state = {
        field: ""
    }
    componentWillMount () {
        this.setState({
            field: this.props.field
        })
    }
    componentWillUnmount () {
        this.setState({
            field: ""
        })
    }
    render () {
        return <div className="x-field">
            <div 
                    className="x-field-input" contentEditable="true" 
                    suppressContentEditableWarning={true} 
                    onInput={e=> this.props.setField(e.target.innerHTML)}
                    data-placeholder={this.props.children} 
                >
                {this.state.field}
            </div>
        </div> 
    }
}

export class XSlider extends React.Component {
    state = {
        value: this.props.min,
    };

    setValue = (value) => {
        if (this.props.min <= value && value < this.props.max) {
            this.setState({
                value: value,
            });
        };
    };

    render () {
        return <div className="x-slider">
            <div className="x-slider-input">
                <input type="range" 
                    min={this.props.min} max={this.props.max} value={this.state.value} 
                    onChange={handleChange(this.setValue)}/>
            </div>
            <div className="x-slider-output">
                {this.state.value}
            </div>
        </div>
    }
}

export class XTumbler extends React.Component {
    state = {
        context: this.props.context,
    }

    setContext = (value) => {
        this.props.setContext(value);
        this.setState({
            context: value,
        })
    };
    
    getContextButton = (item) => {
        var classList = ['xtumble-item']
        if (this.state.context !== item.context) {
            classList.push("xtumble-selected")
        }
        if (item.type) {
            classList.push("svg")
        }

        return <div className={classList.join(" ")} key = {nanoid()} onClick={() => {this.setContext(item.context)}}> 
            {item.name}
        </div>
    }
    render () {
        return <div className="xtumble"> 
            <div className="xtumble-wrapper">
                {this.props.tumbleConfig.map(this.getContextButton)}
            </div>
        </div>
    }
}