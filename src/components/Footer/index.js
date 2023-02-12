import "./scss/footer.scss";

function Footer(props) {
  if (props.toolkit.enableFooter) {
    return (
      <div className="footer">
        <div className="footer-content">
          <p>
            WebCrossUI beta 2020-2023 <br />
            Developed by Kensoi
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
