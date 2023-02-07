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
      cardArticleState: false,
      cardLayout: null,
      cardResponse: null,
      headerState: JSON.parse(localStorage.getItem("headerState")) || true,
      footerState: JSON.parse(localStorage.getItem("footerState")) || true,
      colorSchema: localStorage.getItem("colorSchema") || "auto",
    };
  }

  componentDidUpdate() {
    // this.toolkit.cardArticleState ? this.enableScroll() : this.disableScroll();
  }
  createToolkit () {
    this.toolkit = {
      cardResponse: this.state.cardResponse,
      saveCardResponse: (response) => {
        this.setState({
          cardResponse: response,
        });
      },

      colorSchema: this.state.colorSchema,
      setColorSchema: (schema) => {
        localStorage.setItem("colorSchema", schema);
        this.setState({
          colorSchema: schema,
        });
      },

      cardArticleState: this.state.cardArticleState,
      cardLayout: this.state.cardLayout,

      setCardArticleState: (state) => {
        this.setState({
          cardArticleState: state,
        });
      },

      setCardLayout: (content) => {
        this.setState({
          cardLayout: content,
        });
      },

      closeCard: () => {
        this.setState({
          cardArticleState: false,
        });
      },

      openCard: (content) => {
        this.setState({
          cardOffset: window.scrollY + "px",
          cardArticleState: true,
          cardLayout: cardLayouts[content],
        });
      },
      getScrollLock: () => {
        return this.state.cardOffset;
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
        {this.toolkit.cardArticleState ? (
          <CardWrap toolkit={this.toolkit} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
