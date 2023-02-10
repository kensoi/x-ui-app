import React from "react";
import { Headline, Paragraph, XRaw } from "../../../../XBlock/XBlock";
import { XSlider, XButton } from "../../../../XForms/XForms";

export default class SliderTest extends React.Component {
  state = {
    first: 0,
    second: 0,
    third: 0,
  };

  setFirst = (value) => {
    this.setState({
      first: value,
    });
  };
  setSecond = (value) => {
    this.setState({
      second: value,
    });
  };
  setThird = (value) => {
    this.setState({
      third: value,
    });
  };

  response = () => {
    this.props.toolkit.returnCardResponse({
      "first": this.state.first,
      "second": this.state.second,
      "third": this.state.third
    })
  }

  render() {
    return (
      <>
        <Headline>Пример ползунка</Headline>
        <Paragraph>
          <XRaw>
            Первое значение (в поинтах)
            <XSlider
              min={0}
              max={100}
              setValue={this.setFirst}
              currency="points"
            />
          </XRaw>
          <XRaw>
            Второе значение (в метрах)
            <XSlider
              min={0}
              max={100}
              setValue={this.setSecond}
              currency="metres"
            />
          </XRaw>
          <XRaw>
            Третье значение (в рублях)
            <XSlider
              min={0}
              max={100}
              setValue={this.setThird}
              currency="rubles"
            />
          </XRaw>
        </Paragraph>
        <Paragraph>
          <XButton title="Ответить" onClick={this.response}/>
        </Paragraph>
      </>
    );
  }
}
