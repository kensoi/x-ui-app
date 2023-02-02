import "./scss/x-list.scss"

function XList (props) {
    return <div className="x-list">
        {props.children}
    </div>
}

export default XList;