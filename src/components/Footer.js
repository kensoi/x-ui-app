import "./scss/footer.scss";

function Footer (props) {
    if (props.toolkit.enableFooter) {
        return (
            <div className="footer">
                <div className="footer-content">
                    footer
                </div>
            </div>
        )
    }
}

export default Footer;