import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="footer section-padding">
      <FooterOverlay />
      <Newsletter />
      <div className="footer-links">
        <div className="footer-links-contact">
          <h1 className="footer-headtext">Contact Us</h1>
          <p className="p-opensans">9 W 53rd Stn New York, NY 100019, USA</p>
          <p className="p-opensans">+1 212-344-1230</p>
          <p className="p-opensans">+1 212-555-1230</p>
        </div>
        <div className="footer-links-logo">
          <img src={images.gericht} alt="footer logo" />
          <p className="p-opensans">
            The best way to find yourself is to lose yourself in the service of
            others
          </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="spoon-img"
            style={{ marginTop: 15 }}
          />
          <div className="footer-links-icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="footer-links-work">
          <h1 className="footer-headtext">Working Hours</h1>
          <p className="p-opensans">Monday-Friday:</p>
          <p className="p-opensans">08:00 am - 12:00 am</p>
          <p className="p-opensans">Saturday-Sunday:</p>
          <p className="p-opensans">07:00 am - 12:00 pm</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="p-opensans">2023 Gericht. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
