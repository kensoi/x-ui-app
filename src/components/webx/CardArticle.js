import "./scss/card-article.scss";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";


class CardWrap extends React.Component {
  state = {
    opened: false,
  };

  open = () => {
    setTimeout(() => this.setState({
      opened: true,
    }), 100);
    
  };

  close = () => {
    this.setState({
      opened: false,
    });
    setTimeout(() => this.props.toolkit.closeCard(false), 200);
  };

  componentDidMount() {
    setTimeout(this.open(), 100);
  };

  render() {
    try {
      return (
        <div className={`wrapper ${this.state.opened ? "opened" : "closed"}`}>
          <div className={`note ${this.state.opened ? "opened" : "closed"}`}>
            <div className="icon" onClick={this.close}>
              <CloseIcon />
            </div>
            <this.props.toolkit.cardLayout toolkit={this.props.toolkit} />
          </div>
        </div>
      );
    }
    catch (err) {
      console.log(err)
      return "no content"
    }
  }
}
export default CardWrap;
