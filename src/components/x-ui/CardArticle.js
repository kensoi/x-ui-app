import "./scss/card-article.scss";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
export class CardWrap extends React.Component {
    state = {
        opened: false,
    }
    componentDidMount () {
        setTimeout(
            () => {
                this.setState({
                    opened: true
                })
            },
            100
        )
    }
    render () {
        return (
            <div className={`wrapper ${this.state.opened ? "opened":"closed"}`}>
                <div className={`note ${this.state.opened ? "opened":"closed"}`}>
                    <div className="icon" onClick={() => {
                        this.setState({
                            opened: false
                        })
                        setTimeout(()=>this.props.toolkit.closeCard(false), 200)
                    }}>
                        <CloseIcon/>
                    </div>
                    <this.props.toolkit.cardLayout toolkit={this.props.toolkit}/>
                </div>
            </div>
        )
    }
}

export function Headline (props) {
    return <div className="headline">
        {props.children}
    </div>
}
export function Subline (props) {
    return <div className="subline">
        {props.children}
    </div>
}

export function CardAP (props) {
    return <div className="paragraph">
        {props.children}
    </div>
}