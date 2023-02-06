import { CardAH, CardAP } from "../x-ui/CardArticle";
import XDropdown from "../x-ui/XDropdown";
import XButton from "../x-ui/XButton";
import XField from "../x-ui/XField";
import { XList } from "../x-ui/Separators";
import { useState } from "react";

function NotifyCard (props) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const closeCard = () => {
        props.toolkit.saveCardResponse({
            "name": name,
            "username": username,
            "email": email,
        })
        props.toolkit.closeCard();
    }
    return <> 
        <CardAH> 
            Регистрация пользователя 
        </CardAH>
        <CardAP> 
            <XList>
                <XField field = {name} setField = {setName}>
                    Имя пользователя
                </XField>
                <XField field = {username} setField = {setUsername}>
                    Никнейм
                </XField>
            </XList>
            <XField field = {email} setField = {setEmail}>
                Электронная почта
            </XField>
        </CardAP>
        <CardAP>
            <XList>
                <XButton onClick={closeCard}>Зарегистрироваться</XButton>
            </XList>
        </CardAP>
    </>
}

export default NotifyCard;