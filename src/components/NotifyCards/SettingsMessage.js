import { CardAH, CardAP } from "../x-ui/CardArticle";
import { XRaw } from "../x-ui/Separators";
import ColorSchemaChanger from "../ColorSchemaChanger";
import XTumble from "../x-ui/XTumble";


function NotifyCard (props) {
    const contexts = [
        {
            name: "OFF",
            context: false
        },
        {
            name: "ON",
            context: true
        },
    ]
    return <> 
        <CardAH> 
            Настройки 
        </CardAH>
        <CardAP> 
            <XRaw>
                Цветовая схема
                <ColorSchemaChanger toolkit={props.toolkit} />
            </XRaw>
            <XRaw>
                Включить Header
                <XTumble tumbleConfig={contexts} context={props.toolkit.enableHeader} setContext={props.toolkit.setHeaderState}/>
            </XRaw>
            <XRaw>
                Включить Footer
                <XTumble tumbleConfig={contexts} context={props.toolkit.enableFooter} setContext={props.toolkit.setFooterState}/>
            </XRaw>
        </CardAP>
    </>
}

export default NotifyCard;