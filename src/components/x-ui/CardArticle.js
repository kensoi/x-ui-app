import "./scss/card-article.scss";
import CloseIcon from '@mui/icons-material/Close';

export function CardArticle (props) {
    if (props.toolkit.cardArticleState) {
        return (
            <div className="wrapper">
                <div className="note">
                    <div className="icon" onClick={() => {props.toolkit.closeCard(false)}}>
                        <CloseIcon/>
                    </div>
                    <props.toolkit.cardLayout toolkit={props.toolkit}/>
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