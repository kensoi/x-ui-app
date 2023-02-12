import React from "react";

import { FormGrid, FormLabel, XRaw } from "../../../../XBlock";
import { XField, XButton } from "../../../../XForms";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import AddIcon from '@mui/icons-material/Add';
import { Close } from "@mui/icons-material";
import LoginIcon from '@mui/icons-material/Login';

export default class RegisterForm extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
  };

  setName = (value) => {
    this.setState({
      name: value,
    });
  };

  setUsername = (value) => {
    this.setState({
      username: value,
    });
  };

  setEmail = (value) => {
    this.setState({
      email: value,
    });
  };

  sendResponse = () => {
    this.props.toolkit.returnCardResponse({
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
    });
  };

  clearForm = () => {
    this.props.toolkit.showCard("register");
  }

  goToLogin = () => {
    this.props.toolkit.showCard("login");
  };

  render() {
    return (
      <>
        <h1>Создать аккаунт -- просто!</h1>
        <FormGrid>
          <FormLabel>Имя пользователя:</FormLabel>
          <XField
            icon={<PersonIcon />}
            field={this.state.name}
            setField={this.setName}
            noWrap={true}
          >
            Имя пользователя
          </XField>
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
            icon={<EmailOutlinedIcon />}
            field={this.state.email}
            setField={this.setEmail}
            noWrap={true}
          >
            E-mail
          </XField>
        </FormGrid>
        <XRaw>
          <FormLabel>
            <XButton onClick={this.sendResponse} icon={<AddIcon/>} hideEmptyPaddings={true}>
              Создать
            </XButton>
            <XButton onClick={this.goToLogin} icon={<LoginIcon/>} hideEmptyPaddings={true}>
              Войти в аккаунт
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
