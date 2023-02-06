import { CardAH, CardAP } from "../x-ui/CardArticle";
import { XList } from "../x-ui/Separators";
import XButton from "../x-ui/XButton";

function NotifyCard (props) {
    return <> 
        <CardAH> 
            О приложении 
        </CardAH>
        <CardAP> 
            Данный репозиторий служит демонстрацией компонентов X-UI (название в следствии может быть изменено), а также может быть использован в качестве шаблона для других приложений.
        </CardAP>
        <CardAP> 
            По всем вопросам можно будет обратиться к автору программы. Чтобы закрыть эту карточку-статью, нажмите на красный кружок.
        </CardAP>
        <CardAP> 
            <XList>
                <XButton 
                        onClick={props.toolkit.closeCard}>
                    Закрыть
                </XButton>
                <XButton 
                        onClick={() => window.open("https://github.com/kensoi")}>
                    Разработчик
                </XButton>
                <XButton 
                        onClick={() => window.open("https://github.com/kensoi/x-ui-app")}>
                    Репозиторий
                </XButton>
            </XList>
        </CardAP>
    </>
}

export default NotifyCard;