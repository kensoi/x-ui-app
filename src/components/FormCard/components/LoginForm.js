import React from "react";

import { Headline, Paragraph, XList } from "../../XBlock/XBlock";
import { XField, XButton } from "../../XForms/XForms";
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
        this.props.toolkit.formCard.returnResponse({
            "username": this.state.username,
            "password": this.state.password,
        });
    };


    goToRegister = () => {
        this.props.toolkit.formCard.showLayout("register");
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