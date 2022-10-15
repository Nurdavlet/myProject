import "../../css/footer.css";

function Footer() {
    return (<>
        <div className="footer">
            <div>Halal food</div>
            <div>
                <p>Halal food shop</p>
                <ul className="alink">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div className="copyright">Copyright goes here</div></>
    );
}

export default Footer;