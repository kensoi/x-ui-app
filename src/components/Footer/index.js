import "./scss/stylesheet.scss";
import {FooterButton} from "./footerButton";

function Footer(props) {
  if (props.toolkit.enableFooter) {
    return (
      <div className="footer">
        <div className="footer-content">
          <p>
            WebCrossUI beta 2020-2023 <br />
            Developed by Kensoi
          </p>
          <FooterButton onClick={() => {window.open("https://github.com/kensoi")}}>
            Разработчик
          </FooterButton>
          <FooterButton onClick={() => {window.open("https://github.com/kensoi/web-cross-ui")}}>
            Репозиторий
          </FooterButton>
        </div>
      </div>
    );
  }
}

export default Footer;
