import { Headline, CardAP, Subline } from "../x-ui/CardArticle";
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
        <Headline> 
            Настройки 
        </Headline>
        <Subline> 
            Компоненты 
        </Subline>
        <CardAP> 
            <XRaw>
                Включить Header
                <XTumble tumbleConfig={contexts} context={props.toolkit.enableHeader} setContext={props.toolkit.setHeaderState}/>
            </XRaw>
            <XRaw>
                Включить Footer
                <XTumble tumbleConfig={contexts} context={props.toolkit.enableFooter} setContext={props.toolkit.setFooterState}/>
            </XRaw>
        </CardAP>
        <Subline> 
            Дополнительное 
        </Subline>
        <CardAP> 
            <XRaw>
                Цветовая схема
                <ColorSchemaChanger toolkit={props.toolkit} />
            </XRaw>
        </CardAP>
    </>
}

export default NotifyCard;