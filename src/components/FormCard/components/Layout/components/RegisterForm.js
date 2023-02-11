import React from "react";

import { Headline, Paragraph, XList} from "../../../../XBlock/XBlock";
import { XField, XButton } from "../../../../XForms/XForms";
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

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

  goToLogin = () => {
    this.props.toolkit.showCard("login");
  }

  render() {
    return (
      <>
        <Headline>Создать аккаунт -- просто!</Headline>
        <Paragraph>
          <div className="grid-template-field">
            <div className="div-centerize disable-on-vertical">Имя пользователя:</div>
            <XField icon={<PersonIcon />} field={this.state.name} setField={this.setName}
              noWrap={true}>
              Имя пользователя
            </XField>
            <div className="div-centerize disable-on-vertical">Никнейм:</div>
            <XField
              icon={<AlternateEmailIcon />}
              field={this.state.username}
              setField={this.setUsername}
              noWrap={true}
            >
              Никнейм
            </XField>
            <div className="div-centerize disable-on-vertical">E-mail:</div>
            <XField icon={<EmailOutlinedIcon/>} field={this.state.email} setField={this.setEmail}
              noWrap={true}>
              E-mail
            </XField>
          </div>
        </Paragraph>
        <Paragraph>
          <XList>
            <XButton onClick={this.sendResponse}>Создать</XButton>
            <XButton onClick={this.goToLogin}>Войти в существующий</XButton>
          </XList>
        </Paragraph>
      </>
    );
  }
}
