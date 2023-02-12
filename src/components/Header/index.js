import "./scss/stylesheet.scss";
import ProfileButton from "./components/ProfileButton";

function HeaderLogo(props) {
  return <div className="header-logo">WebCrossUI</div>;
}

function Header(props) {
  if (props.toolkit.enableHeader) {
    return (
      <div className="header">
        <div className="header-content">
          <HeaderLogo />
          <ProfileButton toolkit = {props.toolkit}/>
        </div>
      </div>
    );
  }
}

export default Header;
