import React from "react";

import "./css/global.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FormCard from "./components/FormCard/FormCard";
import AppContent from "./components/Content/Content";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardOffset: 0,
      cardLayout: null,
      cardResponse: null,
      
      cardMounted: false,
      cardLoaded: false,

      headerState: JSON.parse(localStorage.getItem("headerState")) || true,
      footerState: JSON.parse(localStorage.getItem("footerState")) || true,
      colorSchema: localStorage.getItem("colorSchema") || "auto",
    };
  }

  openFormCard = (layout) => {
    this.setState({
      cardMounted: true,
      cardLayout: layout,
    });
    setTimeout(() => {
      this.setState({
        cardLoaded: true,
      });
    }, 100);
  }

  createToolkit () {
    this.toolkit = {
      formCard: {
        isMounted: this.state.cardMounted, // Component mounted and ready to show
        isVisible: this.state.cardLoaded, // Component showed
        response: this.state.cardResponse,
        layout: this.state.cardLayout,
        topOffset: this.state.cardOffset,

        showLayout: (layout, response=null) => {
          this.setState({
            cardOffset: window.scrollY,
          })
  
          if (this.state.cardMounted) {
            this.toolkit.formCard.returnResponse(response)
            setTimeout(() => {this.openFormCard(layout)}, 300)
          }
  
          else {
            this.openFormCard(layout);
          };
        },
  
        returnResponse: (response) => {
          this.setState({
            cardLoaded: false,
          });
  
          setTimeout(() => {
            this.setState({
              cardResponse: {
                "layout": this.state.cardLayout,
                "response": response,
              },
            });
          }, 100);
  
          setTimeout(() => {
            this.setState({
              cardMounted: false,
            });
          }, 200);
        },
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

    return (
      <div className={`webx ${this.toolkit.colorSchema}`}>
        <Header toolkit={this.toolkit} />
        <AppContent toolkit={this.toolkit} />
        <Footer toolkit={this.toolkit} />
        <FormCard toolkit={this.toolkit}/>
      </div>
    );
  }
}

export default App;
