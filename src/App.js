import React from "react";

import "./components/webx/css/global.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import CardWrap from "./components/webx/CardArticle";
import cardLayouts from "./components/NotifyCards/LayoutWrapper";
import AppContent from "./AppContent";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardOffset: "0px",
      cardLayout: null,
      cardResponse: null,
      cardMounted: false,
      cardLoaded: false,

      headerState: JSON.parse(localStorage.getItem("headerState")) || true,
      footerState: JSON.parse(localStorage.getItem("footerState")) || true,
      colorSchema: localStorage.getItem("colorSchema") || "auto",
    };
  }

  loadCard = () => {
    this.setState({
      cardLoaded: true,
    });
  };

  createToolkit () {
    this.toolkit = {
      cardMounted: this.state.cardMounted, // Component mounted and ready to show
      cardLoaded: this.state.cardLoaded, // Component showed
      cardResponse: this.state.cardResponse,
      cardLayout: this.state.cardLayout,

      showCard: (layout) => {
        this.setState({
          cardOffset: window.scrollY + "px",
        })
        if (this.state.cardMounted) {
          this.toolkit.returnCardResponse({})
          setTimeout(() => {
            this.setState({
              cardMounted: true,
              cardLayout: cardLayouts[layout],
            });
          }, 300)
          setTimeout(() => {
            this.setState({
              cardLoaded: true,
            });
          }, 400);
        }
        else {
          this.setState({
            cardMounted: true,
            cardLayout: cardLayouts[layout],
          });
          setTimeout(() => {
            this.setState({
              cardLoaded: true,
            });
          }, 100);
        };
      },
      returnCardResponse: (response) => {
        this.setState({
          cardLoaded: false,
        });
        setTimeout(() => {
          this.setState({
            cardResponse: { ...response },
          });
        }, 100);
        setTimeout(() => {
          this.setState({
            cardMounted: false,
          });
        }, 200);
      },

      getCardOffset: ()=>{
        return this.state.cardOffset
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
      this.toolkit.openCard("hello");
    }

    return (
      <div className={`webx ${this.toolkit.colorSchema}`}>
        <Header toolkit={this.toolkit} />
        <AppContent toolkit={this.toolkit} />
        <Footer toolkit={this.toolkit} />
        { this.toolkit.cardMounted ? (
          <CardWrap toolkit={this.toolkit} loadCard={this.loadCard}/>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
