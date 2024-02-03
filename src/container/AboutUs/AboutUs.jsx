import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="about app-bg flex-center section-padding" id="about">
    <div className="about-overlay flex-center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="about-content flex-center">
      <div className="about-content_about">
        <h1 className="headtext-cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" />
        <p className="p-opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom-button">
          Know More
        </button>
      </div>

      <div className="about-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="about-content_history">
        <h1 className="headtext-cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" />
        <p className="p-opensans">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="custom-button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
