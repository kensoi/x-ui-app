import "./scss/x-button.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const XButton = (props) => {
    //{icon = null, text = null, onClick = null, is_xmenu=false}
    //{icon = null, children = null, onClick = null, isDropdown=false}
    let icon;
    let children;
    let isDropdown;

    if (props.icon) {
        icon = <div className="x-button-icon"> {props.icon} </div>
    }
    if (props.children) {
        children = <div className="x-button-title"> {props.children} </div>
    }
    if (props.isDropdown) {
        isDropdown = <div className="x-button-dropdown-icon"> <KeyboardArrowDownIcon/> </div>
    }
    return <div className="x-button" onClick={props.onClick}>
        { icon }
        { children }
        { isDropdown }
    </div>
}


export default XButton;