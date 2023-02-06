import "./scss/x-field.scss";
import React from "react";

class XField extends React.Component {
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

// var XField = React.createClass({
//     render: function(){
//         return <div className="x-field">
//             <div className="x-field-input"
//             onInput={this.emitChange}
//             onBlur={this.emitChange}
//             contentEditable>

//             </div>
//         </div>;
//     }
// });

export default XField;

