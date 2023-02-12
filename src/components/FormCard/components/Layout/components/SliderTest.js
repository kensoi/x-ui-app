import React from "react";
import { XSlider, XButton } from "../../../../XForms";

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
        <h1>Пример ползунка</h1>
        <p>
          <div className="grid-template-field">
            <div className="div-centerize">
              Первое значение (в поинтах)
            </div>
            <XSlider
              min={0}
              max={100}
              setValue={this.setFirst}
              currency="points"
            />
            <div className="div-centerize">
              Второе значение (в метрах)
            </div>
            <XSlider
              min={0}
              max={100}
              setValue={this.setSecond}
              currency="metres"
            />
            <div className="div-centerize">
              Третье значение (в рублях)
            </div>
            <XSlider
              min={0}
              max={100}
              setValue={this.setThird}
              currency="rubles"
            />
          </div>
        </p>
        <p>
          <XButton title="Ответить" onClick={this.response}/>
        </p>
      </>
    );
  }
}
