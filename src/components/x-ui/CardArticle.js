import "./scss/card-article.scss";
import CloseIcon from '@mui/icons-material/Close';

export function CardArticle (props) {
    if (props.enabled) {
        return (
            <div className="wrapper">
                <div className="note light">
                    <div className="icon" onClick={() => {props.onClose(false)}}>
                        <CloseIcon/>
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