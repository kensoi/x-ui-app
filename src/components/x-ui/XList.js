import "./scss/x-list.scss"

export function XList (props) {
    return <div className="x-list">
        {props.children}
    </div>
}
export function XRaw (props) {
    return <div className="x-raw">
        {props.children}
    </div>
}