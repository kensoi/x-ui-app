import "./scss/form-card.scss";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

import GreetingsMessage from "./components/GreetingsMessage";
import SettingsMessage from "./components/SettingsMessage";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SliderTest from "./components/SliderTest";
import TumbletTest from "./components/TumbletTest";

class FormCard extends React.Component {
  constructor(props) {
    super(props);

    this.layoutList = {
      "hello": GreetingsMessage,
      "settings": SettingsMessage,
      "register": RegisterForm,
      "tumbler": TumbletTest,
      "login": LoginForm,
      "slider": SliderTest,
    }
  }
  state = {
    freezed: false,
  }

  closeForm = () => {
    // if (!this.state.freezed) {
      this.props.toolkit.formCard.returnResponse(null)
    // }
    // else {
    //   this.setState({
    //     freezed: false,
    //   })
    // }
  }

  // blockClosing = () => {
  //   this.setState({
  //     freezed: true,
  //   })
  // }

  backgroundBlur = () => {
    const isVisible = this.props.toolkit.formCard.isVisible ? "visible" : "invisible";
    const ClassList = ["form-card-background", isVisible].join(" ");
    return <div className={ClassList} onClick={this.closeForm}></div>
  }

  closeButton = () => {
    const returnNull = () => {this.props.toolkit.formCard.returnResponse(null)};
    return <div className="form-card-close-button" onClick={this.closeForm}>
      <CloseIcon />
    </div>
  }

  layout = () => {
    const ActualLayout = this.layoutList[this.props.toolkit.formCard.layout]
    return <ActualLayout toolkit={this.props.toolkit}/>
  }

  wrapper = () => {
    const isVisible = this.props.toolkit.formCard.isVisible ? "visible" : "invisible";
    const ClassList = ["form-card-layout", isVisible].join(" ");
    const scrollY = this.props.toolkit.formCard.topOffset + "px";
    const returnNull = () => {this.props.toolkit.formCard.returnResponse(null)};

    return <div className={ClassList} style={{top: scrollY}}>
        <this.closeButton />
        <this.layout/>
      </div>
  };

  render() {
    if (this.props.toolkit.formCard.isMounted) {
      return <>
        <this.backgroundBlur />
        <this.wrapper />
      </>
    }
  }
}
export default FormCard;
