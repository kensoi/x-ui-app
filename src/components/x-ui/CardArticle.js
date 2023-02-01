import "./scss/CardArticle.scss";

export function CardArticle (props) {
    if (props.enabled) {
        return (
            <div className="wrapper">
                <div className="note">
                    <div className="icon" onClick={() => {props.onClose(false)}}>
                    </div>
                    {props.children}
                </div>
            </div>
        )
    }
}

export function CardAH (props) {
    return <div className="headline">
        {props.children}
    </div>
}

export function CardAP (props) {
    return <div className="paragraph">
        {props.children}
    </div>
}