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
                </XList>
            </Paragraph>
        </>
    }
}

export default NotifyCard;