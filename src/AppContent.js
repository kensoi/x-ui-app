
import XButton from "./components/x-ui/XButton";
import "./components/x-ui/scss/AppContent.scss";
function CSSTheme(theme_mode) {
    switch (theme_mode) {
        case "l":
            return "light"

        case "d":
            return "dark"

        case "r":
            return "rose" // Даша привет)
        
        default:
            return "auto"
    }
}

function ButtonList (props) {
    return <div className="button-list">
        {props.children}
    </div>
}
function ToggleState (state, setstate) {
    switch (state) {
        case false: setstate(true); break;
        default: setstate(false);
    }
}
export function AppContent (props) {
    return <div className={"app-content " + CSSTheme(props.toolkit.dm)}>
        <ButtonList>
            <XButton text="toggle Header" onClick={() => ToggleState(props.toolkit.enableHeader, props.toolkit.setHeaderState)} />
            <XButton text="toggle Footer" onClick={() => ToggleState(props.toolkit.enableFooter, props.toolkit.setFooterState)} />
            <XButton text="toggle Note" onClick={() => props.toolkit.setNoteState(true)} />
        </ButtonList>
    </div>
}