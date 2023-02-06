import { CardAH, CardAP } from "../x-ui/CardArticle";
import { XRaw } from "../x-ui/Separators";
import ColorSchemaChanger from "../x-ui/colorSchema/Changer";
import XDropdown from "../x-ui/XDropdown";
import XButton from "../x-ui/XButton";

function Dropdown ({currentState, setCurrentState}) {
    const DropdownData = [
        {  
            "title": "Включен",
            "action": () => {setCurrentState(true)},
        },
        {
            "title": "Выключен",
            "action": () => {setCurrentState(false)},
        }
    ]
    return <XDropdown dropdownListContent={DropdownData} alignBy="right"> 
        <XButton 
                isDropdown={true}>
            {currentState ? "Включен": "Выключен"}
        </XButton>
    </XDropdown>
}


function NotifyCard (props) {
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
                <Dropdown 
                    onClickOpen={true}
                    onMissClickClose={true}
                    onMouseOver={true}
                    currentState={props.toolkit.enableHeader} 
                    setCurrentState={props.toolkit.setHeaderState} />
            </XRaw>
            <XRaw>
                Включить Footer
                <Dropdown 
                    onClickOpen={true}
                    onClickClose={true}
                    onMouseOver={true}
                    currentState={props.toolkit.enableFooter} 
                    setCurrentState={props.toolkit.setFooterState} />
            </XRaw>
        </CardAP>
    </>
}

export default NotifyCard;