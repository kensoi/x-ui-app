import React from "react";

import { Headline, Paragraph } from "../webx/XBlock";
import { XField, XButton } from "../webx/XForms";
import { XList } from "../webx/Separators";

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
        this.props.toolkit.saveCardResponse({
            "name": this.state.name,
            "username": this.state.username,
            "email": this.state.email,
        });
        this.props.toolkit.closeCard();
    };

    render () {
        return <> 
            <Headline> 
                Регистрация пользователя 
            </Headline>
            <Paragraph> 
                <XList>
                    <XField field = {this.state.name} setField = {this.setName}>
                        Имя пользователя
                    </XField>
                    <XField field = {this.state.username} setField = {this.setUsername}>
                        Никнейм
                    </XField>
                </XList>
                <XField field = {this.state.email} setField = {this.setEmail}>
                    Электронная почта
                </XField>
            </Paragraph>
            <Paragraph>
                <XList>
                    <XButton onClick={this.sendResponse}>Зарегистрироваться</XButton>
                </XList>
            </Paragraph>
        </>
    }
}

export default NotifyCard;