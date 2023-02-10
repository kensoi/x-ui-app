import React from "react";

import { Headline, Paragraph, XRaw } from "../../../../XBlock/XBlock";
import { XTumbler } from "../../../../XForms/XForms";

import ColorSchemaChanger from "../../../../ColorSchemaChanger/ColorSchemaChanger";

export default class SettingsMessage extends React.Component {
    contexts = [
        {
            name: "OFF",
            context: false
        },
        {
            name: "ON",
            context: true
        },
    ]
    render() {
        const XTumbleHeader = <XTumbler 
            tumbleConfig={this.contexts} 
            context={this.props.toolkit.enableHeader} 
            setContext={this.props.toolkit.setHeaderState}/>;
        const XTumbleFooter = <XTumbler 
            tumbleConfig={this.contexts} 
            context={this.props.toolkit.enableFooter} 
            setContext={this.props.toolkit.setFooterState}/>;
        
        return <> 
            <Headline> 
                Настройки 
            </Headline>
            <Paragraph> 
                <XRaw>
                    Включить Header {XTumbleHeader}
                </XRaw>
                <XRaw>
                    Включить Footer {XTumbleFooter}
                </XRaw>
                <XRaw>
                    Цветовая схема <ColorSchemaChanger align="right" toolkit={this.props.toolkit} />
                </XRaw>
            </Paragraph>
        </>
    }
    
}