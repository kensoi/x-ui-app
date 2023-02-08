import React from "react";

import { Headline, Paragraph, XList } from "../../XBlock/XBlock";
import { XField, XButton } from "../../XForms/XForms";
import ShortTextIcon from '@mui/icons-material/ShortText';

class NotifyCard extends React.Component {
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
        this.props.toolkit.formCard.returnResponse({
            "name": this.state.name,
            "username": this.state.username,
            "email": this.state.email,
        });
    };

    goToLogin = () => {
        this.props.closeCard();
        setTimeout(
            () => {
                this.props.toolkit.openCard("login")
            }, 300
        )
    }

    render () {
        const icon = <ShortTextIcon />
        return <> 
            <Headline> 
                Регистрация пользователя 
            </Headline>
            <Paragraph> 
                <XList>
                    <XField icon = {icon} field = {this.state.name} setField = {this.setName}>
                        Имя пользователя
                    </XField>
                    <XField icon = {icon} field = {this.state.username} setField = {this.setUsername}>
                        Никнейм
                    </XField>
                </XList>
                <XField icon = {icon} field = {this.state.email} setField = {this.setEmail}>
                    Электронная почта
                </XField>
            </Paragraph>
            <Paragraph>
                <XList>
                    <XButton onClick={this.sendResponse}>Зарегистрироваться</XButton>
                    <XButton onClick={this.goToLogin}>Войти в аккаунт</XButton>
                </XList>
            </Paragraph>
        </>
    }
}

export default NotifyCard;