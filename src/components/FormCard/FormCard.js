import "./scss/card-article.scss";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";


class FormCard extends React.Component {
  constructor(props) {
    super(props);
    this.isVisible = this.props.toolkit.form.isVisible ? "visible" : "unvisible";
    this.top = this.props.toolkit.formCard.topOffset + "px";
    this.backgroundBlurClassList = ["form-card-background", this.isVisible].join(" ");
    this.wrapperClassList = ["form-card-layout", this.isVisible].join(" ");
  }

  backgroundBlur = () => {
    return <div className={this.backgroundBlurClassList}></div>
  }

  closeButton = () => {
    const returnNull = () => {this.props.toolkit.returnCardResponse(null)};
    return <div className="form-card-close-button" onClick={returnNull}>
      <CloseIcon />
    </div>
  }

  layout = () => {
    return <this.props.toolkit.formCard.layout toolkit={this.props.toolkit} />
  }

  wrapper = () => {
    return <div className="form-card-wrapper" top={this.top}>
      <div className={wrapperClassList}>
        <this.closeButton />
        <this.layout />
      </div>
    </div>
  };

  render() {
    if (this.toolkit.formCard.isMounted) {
      return <>
        <this.backgroundBlur />
        <this.wrapper />
      </>
    }
  }
}
export default FormCard;
