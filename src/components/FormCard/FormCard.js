import "./scss/form-card.scss";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error)
    console.log(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

class FormCard extends React.Component {
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
    return <div className="form-card-close-button" onClick={this.closeForm}>
      <CloseIcon />
    </div>
  }

  layout = () => {
    try {
      return <this.props.toolkit.formCard.layout toolkit={this.props.toolkit}/>
    }
    catch (error) {
      console.log(error)
      return <h1>
        Trouble!
      </h1>
    }
  }

  wrapper = () => {
    const isVisible = this.props.toolkit.formCard.isVisible ? "visible" : "invisible";
    const ClassList = ["form-card-layout", isVisible].join(" ");
    const scrollY = this.props.toolkit.formCard.topOffset + "px";

    return <div className={ClassList} style={{top: scrollY}}>
        <this.closeButton />
        <ErrorBoundary>
          <this.layout/>
        </ErrorBoundary>
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
