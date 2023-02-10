import React from "react";

import "./css/global.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppContent from "./components/Content/Content";
import FormCard from "./components/FormCard/FormCard";
import OverflowBG from "./components/OverflowBG/OverflowBG";

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
      cardResponse: JSON.parse(localStorage.getItem("latestResponse")) || {
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
        var offset = 100;
        if (this.state.cardMounted) {
          this.toolkit.returnCardResponse(null)
          offset += 100
        }

        setTimeout(() => {
          this.setState({
            cardLayout: layout,
            cardTopOffset: window.scrollY,
            cardMounted: true,
          })
        }, offset)

        setTimeout(() => {
          this.setState({
            cardLoaded: true,
          })
        }, 100 + offset)
      },

      returnCardResponse: (response) => {
        this.setState({
          cardResponse: {
            layout: this.state.cardLayout + "",
            response: response
          },
          cardLoaded: false,
        })
        localStorage.setItem(
          "latestResponse",
          JSON.stringify({
            layout: this.state.cardLayout + "",
            response: response
          })
        );
        window.scrollTo(window.scrollX, this.toolkit.cardTopOffset + 0);
        setTimeout(() => {
          this.setState({
            cardMounted: false,
          })
        }, 100)
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
    document.body.className = this.toolkit.colorSchema;
    const helloMessage =
      JSON.parse(localStorage.getItem("HelloMessage")) || false;

    if (!helloMessage) {
      localStorage.setItem("HelloMessage", JSON.stringify(true));
      this.toolkit.formCard.showLayout("hello");
    }

    try {
      return (
        <div className={`webx`}>
          <Header toolkit={this.toolkit} />
          <AppContent toolkit={this.toolkit} />
          <Footer toolkit={this.toolkit} />
          <OverflowBG toolkit={this.toolkit} />
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
