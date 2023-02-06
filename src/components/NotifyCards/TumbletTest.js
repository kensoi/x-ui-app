import { CardAH, CardAP } from "../x-ui/CardArticle";
import { XRaw } from "../x-ui/Separators";
import XTumble from "../x-ui/XTumble";
import { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
function NotifyCard (props) {
    const contexts = [
        {
            name: <DoneIcon />,
            type: "svg",
            context: "Пряники с орешками"
        },
        {
            name: <DoNotDisturbIcon/>,
            type: "svg",
            context: "Мандарины без косточек"
        }
    ]
    const [context, setContext] = useState(contexts[0].context); // state test
    return <> 
        <CardAH> 
            Проверка тумблета 
        </CardAH>
        <CardAP> 
            <XRaw>
                Включить свет
                <XTumble tumbleConfig={contexts} context={context} setContext={setContext}/>
            </XRaw>
        </CardAP>
    </>
}

export default NotifyCard;