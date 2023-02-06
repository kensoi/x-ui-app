import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CardWrap } from "./components/x-ui/CardArticle";
import "./components/x-ui/css/global.css";
import { AppContent } from "./AppContent";

import GreetingsMessage from "./components/NotifyCards/GreetingsMessage";
import SettingsMessage from "./components/NotifyCards/SettingsMessage";
import RegisterForm from "./components/NotifyCards/RegisterForm";
import TumbletTest from "./components/NotifyCards/TumbletTest";

class App extends React.Component {
    state = {
        cardArticleState: false,
        cardLayout: null,
        cardResponse: null,
        headerState: JSON.parse(localStorage.getItem("headerState")) || true,
        footerState: JSON.parse(localStorage.getItem("footerState")) || false,
        colorSchema: localStorage.getItem("colorSchema") || "auto",
    }

    render () {
      const toolkit = {
        cardResponse: this.state.cardResponse,
        saveCardResponse: response => this.setState(
            {cardResponse: response}
        ),
        colorSchema: this.state.colorSchema, 
        setColorSchema : schema => {
          localStorage.setItem("colorSchema", schema)
          this.setState({colorSchema: schema})
          },

        cardArticleState: this.state.cardArticleState, 
        cardLayout: this.state.cardLayout,
        setCardArticleState: state => this.setState({cardArticleState: state}),
        setCardLayout: content => this.setState({cardLayout: content}),

        closeCard: () => this.setState({cardArticleState: false}),
        openCard: (content) => {
            this.setState({cardArticleState: true, cardLayout: content})
            
        },

        enableHeader: this.state.headerState, 
        setHeaderState: state => {
            this.setState({headerState: state})
            localStorage.setItem("headerState", JSON.stringify(this.state.headerState))
        },
        
        enableFooter: this.state.footerState, 
        setFooterState: state => {
            this.setState({footerState: state})
            localStorage.setItem("footerState", JSON.stringify(this.state.footerState))
        },
        cardLayouts: {
            hello: GreetingsMessage,
            settings: SettingsMessage,
            register: RegisterForm,
            tumblet: TumbletTest,
        }
    }
    
    const helloMessage = JSON.parse(localStorage.getItem("HelloMessage")) || false
    if (!helloMessage) {
        localStorage.setItem("HelloMessage", JSON.stringify(true))
        this.setState({
            cardArticleState: true,
            cardContent: toolkit.cardLayouts.hello,
        })
    }

    return <div className={`x-ui app-layout ${toolkit.colorSchema}`}>
        <Header toolkit={toolkit}/>
        <AppContent toolkit={toolkit}/>
        <Footer toolkit={toolkit}/>
        {toolkit.cardArticleState ? <CardWrap toolkit={toolkit}/> : ""}
        
    </div>
    }
}

export default App;