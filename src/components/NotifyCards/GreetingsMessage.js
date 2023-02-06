import { CardAH, CardAP } from "../x-ui/CardArticle";

function NotifyCard (props) {
    return <> 
        <CardAH> 
            О приложении 
        </CardAH>
        <CardAP> 
            Данный репозиторий служит демонстрацией компонентов X-UI (название в следствии может быть изменено), а также может быть использован в качестве шаблона для других приложений.
        </CardAP>
        <CardAP> 
            Данное оповещение несёт информативный характер и появляется всего 1 раз.
        </CardAP>
    </>
}

export default NotifyCard;