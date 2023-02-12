import React from "react";

import { FormGrid, FormLabel, XRaw } from "../../../../XBlock";
import { XField, XButton } from "../../../../XForms";
import ShortTextIcon from "@mui/icons-material/ShortText";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import AddIcon from '@mui/icons-material/Add';
import { Close } from "@mui/icons-material";
import LoginIcon from '@mui/icons-material/Login';

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

  clearForm = () => {
    this.props.toolkit.showCard("login");
  }

  render() {
    return (
      <>
        <h1>Войти</h1>
        <FormGrid>
          <FormLabel>Никнейм:</FormLabel>
          <XField
            icon={<AlternateEmailIcon />}
            field={this.state.username}
            setField={this.setUsername}
            noWrap={true}
          >
            Никнейм
          </XField>
          <FormLabel>E-mail:</FormLabel>
          <XField
            icon={<ShortTextIcon />}
            field={this.state.password}
            setField={this.setPassword}
          >
            Пароль
          </XField>
        </FormGrid>
        <XRaw>
          <FormLabel>
            <XButton onClick={this.sendResponse} icon={<LoginIcon/>} hideEmptyPaddings={true}>
              Войти
            </XButton>
            <XButton onClick={this.goToLogin} icon={<AddIcon/>} hideEmptyPaddings={true}>
              Зарегистрироваться
            </XButton>
          </FormLabel>
          <FormLabel>
            <XButton onClick={this.clearForm} icon={<Close/>} hideEmptyPaddings={true}>
              Очистить
            </XButton>
          </FormLabel>
        </XRaw>
      </>
    );
  }
}
