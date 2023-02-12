import React from "react";

import { Headline, Paragraph, XList } from "../../../../XBlock";
import { XField, XButton } from "../../../../XForms";
import ShortTextIcon from "@mui/icons-material/ShortText";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function GridTemplate (props) {
  return <div className="grid-template-field">
    {props.children}
  </div>
}
function Centerize (props) {
  return <div className="div-centerize disable-on-vertical">
    {props.children}
  </div>
}

export default class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  setUsername = (value) => {
    this.setState({
      username: value,
    });
  };

  setPassword = (value) => {
    this.setState({
      password: value,
    });
  };

  sendResponse = () => {
    this.props.toolkit.returnCardResponse({
      username: this.state.username,
      password: this.state.password,
    });
  };

  goToRegister = () => {
    this.props.toolkit.showCard("register");
  };

  render() {
    return (
      <>
        <Headline>Войти</Headline>
        <Paragraph>
          <GridTemplate>
            <Centerize>Никнейм:</Centerize>
            <XField
              icon={<AlternateEmailIcon />}
              field={this.state.username}
              setField={this.setUsername}
              noWrap={true}
            >
              Никнейм
            </XField>
            <Centerize>E-mail:</Centerize>
            <XField
              icon={<ShortTextIcon />}
              field={this.state.password}
              setField={this.setPassword}
            >
              Пароль
            </XField>
          </GridTemplate>
        </Paragraph>
        <Paragraph>
          <XList>
            <XButton onClick={this.sendResponse}>Войти</XButton>
            <XButton onClick={this.goToRegister}>Зарегистрироваться</XButton>
          </XList>
        </Paragraph>
      </>
    );
  }
}
