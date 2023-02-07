import React from "react";
import { Headline, Paragraph } from "../webx/XBlock";

class NotifyCard extends React.Component {
    render () {
        return <> 
            <Headline> 
                О приложении 
            </Headline>
            <Paragraph> 
                Данный репозиторий служит демонстрацией компонентов WebCrossUI, а также может быть использован в качестве шаблона для других
                приложений.
            </Paragraph>
            <Paragraph> 
                Данное оповещение несёт информативный характер и появляется всего 1 раз.
            </Paragraph>
        </>
    }
}

export default NotifyCard;