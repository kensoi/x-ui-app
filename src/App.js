import React from "react";

import "./css/global.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppContent from "./components/Content/Content";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerState: JSON.parse(localStorage.getItem("headerState")) || true,
      footerState: JSON.parse(localStorage.getItem("footerState")) || true,
      colorSchema: localStorage.getItem("colorSchema") || "auto",
    };
  }

  createToolkit () {
    this.toolkit = {
      colorSchema: this.state.colorSchema,
      setColorSchema: (schema) => {
        localStorage.setItem("colorSchema", schema);
        this.setState({
          colorSchema: schema,
        });
      },


      enableHeader: this.state.headerState,
      setHeaderState: (state) => {
        this.setState({
          headerState: state,
        });
        localStorage.setItem(
          "headerState",
          JSON.stringify(this.state.headerState)
        );
      },

      enableFooter: this.state.footerState,
      setFooterState: (state) => {
        this.setState({ footerState: state });
        localStorage.setItem(
          "footerState",
          JSON.stringify(this.state.footerState)
        );
      },
    };
  }

  render() {
    this.createToolkit();
    const helloMessage =
      JSON.parse(localStorage.getItem("HelloMessage")) || false;

    if (!helloMessage) {
      localStorage.setItem("HelloMessage", JSON.stringify(true));
      this.toolkit.formCard.showLayout("hello");
    }

    try {
      return (
        <div className={`webx ${this.toolkit.colorSchema}`}>
          <Header toolkit={this.toolkit} />
          <AppContent toolkit={this.toolkit} />
          <Footer toolkit={this.toolkit} />
        </div>
      );
    }
    catch (error) {
      return <>
        <h1>
          Error
        </h1>
        <p>
          {error}
        </p>
      </>
    }
  }
}

export default App;
