import "./scss/Notification.scss";

export function NoteBlock (props) {
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

export function NoteH (props) {
    return <div className="headline">
        {props.children}
    </div>
}

export function NoteP (props) {
    return <div className="paragraph">
        {props.children}
    </div>
}