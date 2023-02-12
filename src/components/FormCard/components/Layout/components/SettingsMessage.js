import React from "react";

import { XRaw, FormLabel } from "../../../../XBlock";
import { XTumbler } from "../../../../XForms";

import ColorSchemaChanger from "../../../../ColorSchemaChanger";

export default class SettingsMessage extends React.Component {
  contexts = [
    {
      name: "OFF",
      context: false,
    },
    {
      name: "ON",
      context: true,
    },
  ];
  render() {
    return (
      <>
        <h1>Настройки</h1>
        <XRaw>
          <FormLabel>Включить Header</FormLabel>
          <XTumbler
            tumbleConfig={this.contexts}
            context={this.props.toolkit.enableHeader}
            setContext={this.props.toolkit.setHeaderState}
          />
        </XRaw>
        <XRaw>
          <FormLabel>Включить Footer</FormLabel>
          <XTumbler
            tumbleConfig={this.contexts}
            context={this.props.toolkit.enableFooter}
            setContext={this.props.toolkit.setFooterState}
          />
        </XRaw>
        <XRaw>
          <FormLabel>Цветовая схема</FormLabel>
          <ColorSchemaChanger align="right" toolkit={this.props.toolkit} />
        </XRaw>
      </>
    );
  }
}
