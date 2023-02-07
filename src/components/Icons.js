import React from "react";
import "./scss/x-icon.scss";

class Icon extends React.Component {
    
    getIcon = () => {
        if (this.props.icon) {
            return <div className="x-icon-icon">
                {
                    this.props.icon
                }
            </div>
        }
    }

    getTitle = () => {
        if (this.props.title) {
            return <div className="x-icon-title">
                {
                    this.props.title
                }
            </div>
        }
    }
    
    render () {
        return <div className="x-icon" onClick={this.props.onClick}>
            {this.getIcon()}
            {this.getTitle()}
        </div>
    }
}

export default Icon;