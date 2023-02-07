import React from "react";

import { Headline, Paragraph } from "../webx/XBlock";
import { XField, XButton } from "../webx/XForms";
import { XList } from "../webx/Separators";
import ShortTextIcon from '@mui/icons-material/ShortText';

class NotifyCard extends React.Component {
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
            "username": this.state.username,
            "password": this.state.password,
        });
    };


    goToRegister = () => {
        this.props.toolkit.showCard("register");
    };

    render () {
        const icon = <ShortTextIcon />;
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
                    <XField icon = {icon} field = {this.state.password} setField = {this.setPassword}>
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