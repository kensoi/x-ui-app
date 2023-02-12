import "./scss/stylesheet.scss";

function FormGrid (props) {
    return <div className="form-grid">
        { props.children }
    </div>
}

function FormLabel (props) {
    return <div className="form-label">
        { props.children }
    </div>
}

export {FormGrid, FormLabel};