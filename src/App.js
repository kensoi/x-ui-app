import React from "react";

import "./css/global.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppContent from "./components/Content/Content";
import FormCard from "./components/FormCard/FormCard";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerState: JSON.parse(localStorage.getItem("headerState")) || true,
      footerState: JSON.parse(localStorage.getItem("footerState")) || true,
      colorSchema: localStorage.getItem("colorSchema") || "auto",

      cardTopOffset: 0,
      cardMounted: false,
      cardLoaded: true,
      cardLayout: "settings",
      cardResponse: {
        layout: "settings",
        response: null
      }
    };
  }

  createToolkit () {
    this.toolkit = {
      cardMounted: this.state.cardMounted,
      cardLayout: this.state.cardLayout,
      cardResponse: this.state.cardResponse,
      cardTopOffset: this.state.cardTopOffset,
      cardLoaded: this.state.cardLoaded,

      showCard: (layout) => {
        this.setState({
          cardLayout: layout,
          cardTopOffset: window.scrollY,
          cardMounted: true,
        })
        setTimeout(() => {
          this.setState({
            cardLoaded: true,
          })
        }, 100)
      },
      returnCardResponse: (response) => {
        this.setState({
          cardResponse: {
            layout: this.state.cardLayout + "",
            response: response
          },
          cardLoaded: false,
        })
        setTimeout(() => {
          this.setState({
            cardMounted: false,
          })
        }, 500)
      },
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
          <FormCard toolkit={this.toolkit} />
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
