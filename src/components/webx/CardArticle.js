import "./scss/card-article.scss";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";


class CardWrap extends React.Component {
  returnNull = () => {
    this.props.toolkit.returnCardResponse({});
  };

  componentDidMount() {
    setTimeout(() => this.props.loadCard(), 100);
  };

  render() {
    try {
      return (
        <>
        <div className={`wrapper ${this.props.toolkit.cardLoaded ? "opened" : "closed"}`}>
        </div>
        <div className="note-positioner" style={{top: this.props.toolkit.getCardOffset()}}>
          <div className={`note ${this.props.toolkit.cardLoaded ? "opened" : "closed"}`} >
              <div className="icon" onClick={this.returnNull}>
                <CloseIcon />
              </div>
              <this.props.toolkit.cardLayout toolkit={this.props.toolkit} />
            </div>
          </div>
        </>
      );
    }
    catch (err) {
      console.log(err)
      return "no content"
    }
  }
}
export default CardWrap;
