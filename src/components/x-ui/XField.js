import "../css/XField.css";
function XField ({placeHolder, field, setField, classList=[]}) {
    let classListString = ["x-field", ...classList].join(" ");

    return <div className={classListString} contentEditable="true" suppressContentEditableWarning={true} data-placeholder={placeHolder} onChange={(event) => {
        setField(event.target.innerHTML)}}>
            {field}
    </div>
}

export default XField;