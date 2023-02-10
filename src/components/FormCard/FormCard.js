import React from "react";
import "./scss/form-card.scss";
import CloseIcon from "@mui/icons-material/Close";


export default class FormCard extends React.Component {
    background = () => {
        const ClassList = ["form-card-bg"]
        ClassList.push(this.props.toolkit.cardLoaded ? "visible": "invisible")
        return <div className={ClassList.join(" ")} onClick={() => {this.props.toolkit.returnCardResponse(null)}}></div>
    }
    closeButton = () => {
        return <div className="form-card-close-button" onClick={() => {this.props.toolkit.returnCardResponse(null)}}>
            <CloseIcon />
        </div>
    }

    wrapper = () => {
        const ClassList = ["form-card-wrapper"]
        const offsetStyle = {
            top: this.props.toolkit.cardTopOffset + "px",
        }
        ClassList.push(this.props.toolkit.cardLoaded ? "visible": "invisible")
        return <div className={ClassList.join(" ")} style={offsetStyle}>
            <this.closeButton />
            <div className="form-card-layout">
                {this.props.toolkit.cardLayout}
            </div>
        </div>
    }

    render () {
        if (this.props.toolkit.cardMounted) {
            return <>
                <this.background />
                <this.wrapper />
            </>
        }
        else {
            return <></>
        }
    }
}