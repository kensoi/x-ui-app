/* Color Schema Menu Selector */

/* X-UI components */
import XButton from "../XButton";
import XDropdown from "../XDropdown";
import { List } from "./List";
import { changerButtonData } from "./Button";

function ColorSchemaChanger(props) {
    return <XDropdown dropdownListContent={List(props)} alignBy="right"
        onClickOpen={true}
        onClickClose={true}
        onMouseLeave={true}> 
        <XButton 
                icon={changerButtonData[props.toolkit.colorSchema]["icon"]}
                isDropdown={true}>
            {changerButtonData[props.toolkit.colorSchema]["title"]} 
        </XButton>
    </XDropdown>
}

export default ColorSchemaChanger;