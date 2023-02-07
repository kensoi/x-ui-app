import React from "react";
import { Headline, Paragraph } from "../webx/XBlock";
import { XList } from "../webx/Separators";
import { XSlider } from "../webx/XForms";

class NotifyCard extends React.Component {
    state = {
        value: 0,
    };

    setValue = (value) => {
        this.setState({
            value: value,
        });
    };
    
    render () {
        return <> 
            <Headline> 
                Пример ползунка 
            </Headline>
            <Paragraph> 
                <XList>
                    <XSlider min={0} max={100}/>
                    <XSlider min={0} max={100}/>
                    <XSlider min={0} max={100}/>
                    <XSlider min={0} max={100}/>
                </XList>
            </Paragraph>
        </>
    }
}

export default NotifyCard;