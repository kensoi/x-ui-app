import React from "react";

import { Headline, Paragraph } from "../webx/XBlock";
import { XRaw } from "../webx/Separators";
import { XTumbler } from "../webx/XForms";

import DoneIcon from '@mui/icons-material/Done';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

class NotifyCard extends React.Component {
    contexts = [
        {
            name: <DoneIcon />,
            type: "svg",
            context: "Пряники с орешками"
        },
        {
            name: <DoNotDisturbIcon/>,
            type: "svg",
            context: "Мандарины без косточек"
        }
    ]
    state = {
        context: this.contexts[0].context,
    }

    setContext = (value) => {
        this.setState({
            context: value,
        })
    }

    render () {
        return <> 
            <Headline> 
                Проверка тумблета 
            </Headline>
            <Paragraph> 
                <XRaw>
                    Включить свет
                    <XTumbler 
                        tumbleConfig={this.contexts} 
                        context={this.state.context} 
                        setContext={this.setContext}/>
                </XRaw>
                <XRaw>
                    Выставленное значение: {this.state.context}
                </XRaw>
            </Paragraph>
        </>
    }
}

export default NotifyCard;