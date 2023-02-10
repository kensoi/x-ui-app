import React from "react";
import "./scss/x-button.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

class XButton extends React.Component {
  icon = () => {
    if (!this.hideEmptyPaddings || this.props.icon) {
      return <div className="x-button-icon">{this.props.icon || " "}</div>;
    }
    return " ";
  };

  title = () => {
    if (!this.hideEmptyPaddings || this.props.title || this.props.children) {
      return (
        <div className="x-button-title">
          {this.props.title || this.props.children || " "}
        </div>
      );
    }
    return " ";
  };

  dropdown = () => {
    const classList = ["x-button-dropdown-icon"];
    if (this.props.isDropdown) {
      classList.push("visible");
    }
    if (!this.hideEmptyPaddings || this.props.isDropdown) {
      return (
        <div className={classList.join(" ")}>
          <KeyboardArrowDownIcon />
        </div>
      );
    }
    return " ";
  };
  render() {
    this.hideEmptyPaddings = this.props.hideEmptyPaddings || false;

    return (
      <div className="x-button" onClick={this.props.onClick}>
        <this.icon />
        <this.title />
        <this.dropdown />
      </div>
    );
  }
}

export default XButton;
