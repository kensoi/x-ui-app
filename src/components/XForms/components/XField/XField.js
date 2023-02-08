import React from "react";
import "./scss/x-field.scss";

class XField extends React.Component {
    state = {
        field: ""
    }

    componentDidMount () {
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
            <div className="x-field-icon">
                { this.props.icon || null }
            </div>
            <div className="x-field-input" contentEditable="true" 
                    suppressContentEditableWarning={true} 
                    onInput={e=> this.props.setField(e.target.innerHTML)}
                    data-placeholder={this.props.children}>
                { this.state.field }
            </div>
        </div> 
    }
}

export default XField;