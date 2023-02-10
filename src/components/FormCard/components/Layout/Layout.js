
import GreetingsMessage from "./components/GreetingsMessage";
import SettingsMessage from "./components/SettingsMessage";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SliderTest from "./components/SliderTest";
import TumbletTest from "./components/TumbletTest";
import NotFoundMessage from "./components/NotFoundMessage";

import React from "react";
import {nanoid} from "nanoid";

// function checkDefault(imported) {
//     return imported.default ? imported.default : imported
// }

export default class Layout extends React.Component {
    layoutList = [
        {
            name: "not-found",
            layout: NotFoundMessage,
        },
        {
            name: "hello",
            layout: GreetingsMessage,
        },
        {
            name: "settings",
            layout: SettingsMessage,
        },
        {
            name: "register",
            layout: RegisterForm,
        },
        {
            name: "tumbler",
            layout: TumbletTest,
        },
        {
            name: "login",
            layout: LoginForm,
        },
        {
            name: "slider",
            layout: SliderTest,
        },
    ]

    getLayout = (layout) => {
        const layoutKey = nanoid()
        const loadedLayout = layout
        if (loadedLayout.name === this.props.toolkit.formCard.layout) {
            return <loadedLayout.layout key={layoutKey} toolkit={this.props.toolkit}/>
        }
        else {
            return <div key={layoutKey}></div>
        }
    }

    render () {
        return <>
            {
                this.layoutList.map(this.getLayout)
            }
        </>
    }
  }