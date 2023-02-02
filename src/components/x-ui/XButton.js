import "./scss/x-button.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const XButton = (props) => {
    return <div className="x-button" onClick={props.onClick}>
        { props.icon ? <div className="x-button-icon"> {props.icon} </div> : null }
        { props.children ? <div className="x-button-title"> {props.children} </div> : null }
        { props.isDropdown ? <div className="x-button-dropdown-icon"> <KeyboardArrowDownIcon/> </div> : null }
    </div>
}

export default XButton;