import React from "react";
import { Headline, Paragraph } from "../x-ui/XBlock";

class NotifyCard extends React.Component {
    render () {
        return <> 
            <Headline> 
                О приложении 
            </Headline>
            <Paragraph> 
                Данный репозиторий служит демонстрацией компонентов X-UI (название в следствии 
                может быть изменено), а также может быть использован в качестве шаблона для других
                приложений.
            </Paragraph>
            <Paragraph> 
                Данное оповещение несёт информативный характер и появляется всего 1 раз.
            </Paragraph>
        </>
    }
}

export default NotifyCard;