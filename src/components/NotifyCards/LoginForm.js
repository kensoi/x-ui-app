import React from "react";

import { Headline, Paragraph } from "../webx/XBlock";
import { XField, XButton } from "../webx/XForms";
import { XList } from "../webx/Separators";
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
        this.props.toolkit.saveCardResponse({
            "name": this.state.name,
            "username": this.state.username,
            "email": this.state.email,
        });
        this.props.toolkit.closeCard();
    };


    goToRegister = () => {
        this.props.closeCard();
        setTimeout(
            () => {this.props.toolkit.openCard("register")}, 300
        )
    }

    render () {
        const icon = <ShortTextIcon />
        return <> 
            <Headline> 
                Войти 
            </Headline>
            <Paragraph> 
                <XList>
                    <XField icon = {icon} field = {this.state.username} setField = {this.setUsername}>
                        Никнейм
                    </XField>
                </XList>
                <XList>
                    <XField icon = {icon} field = {this.state.username} setField = {this.setUsername}>
                        Пароль
                    </XField>
                </XList>
            </Paragraph>
            <Paragraph>
                <XList>
                    <XButton onClick={this.sendResponse}>Войти</XButton>
                    <XButton onClick={this.goToRegister}>Зарегистрироваться</XButton>
                </XList>
            </Paragraph>
        </>
    }
}

export default NotifyCard;