import "./css/XButton.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const XButton = ({icon=null, text=null, onClick = null, is_xmenu=false}) => {
    return <div className="x-button" onClick={onClick}>
        { icon ? <div className="x-button-icon"> {icon} </div> : null }
        { text ? <div className="x-button-title"> {text} </div> : null }
        { is_xmenu ? <div className="dropdown-icon"> {<KeyboardArrowDownIcon/>} </div> : null }
    </div>
}


export default XButton;