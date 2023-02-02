import "./scss/x-field.scss";

function XField (props) {
    return <div className="x-field">
        <div 
                className="x-field-input" contentEditable="true" 
                suppressContentEditableWarning={true} 
                data-placeholder={props.children} onChange={(event) => {props.setField(event.target.innerHTML)}}>
            {props.field}
        </div>
    </div> 
}

export default XField;