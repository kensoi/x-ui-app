import "./scss/x-block.scss"

function XBlock (props) {
    return <div className="x-block">
        {props.children}
    </div>
}
export default XBlock;