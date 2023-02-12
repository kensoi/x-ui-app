import React from "react";

import { XRaw } from "../../../../XBlock";
import { XTumbler } from "../../../../XForms";

import DoneIcon from "@mui/icons-material/Done";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

export default class TumbletTest extends React.Component {
  contexts = [
    {
      name: <DoneIcon />,
      type: "svg",
      context: "Пряники с орешками",
    },
    {
      name: <DoNotDisturbIcon />,
      type: "svg",
      context: "Мандарины без косточек",
    },
  ];
  state = {
    context: this.contexts[0].context,
  };

  setContext = (value) => {
    this.setState({
      context: value,
    });
  };

  render() {
    return (
      <>
        <h1>Проверка тумблета</h1>
        <p>
          <XRaw>
            Включить свет
            <XTumbler
              tumbleConfig={this.contexts}
              context={this.state.context}
              setContext={this.setContext}
            />
          </XRaw>
          <XRaw>Выставленное значение: {this.state.context}</XRaw>
        </p>
      </>
    );
  }
}
