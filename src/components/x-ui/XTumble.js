import "./css/XTumble.css";
import {nanoid} from "nanoid";

function XTumbleButton({item, context, setContext}) {
    let buttonType = item.type ? "svg" : ""

    return <div key = {nanoid()} 
                className={"xtumble-item" + (context === item.context ? " "  : " xtumble-selected ") + buttonType } 
                onClick={() => {setContext(item.context)}}>
            {item.name}
        </div>
}

export function XTumble({tumbleConfig, context, setContext}) {
    return <div className="xtumble"> 
        <div className="xtumble-wrapper">
                {tumbleConfig.map(item => XTumbleButton({item, context, setContext}))}
            </div>
        </div>
  }