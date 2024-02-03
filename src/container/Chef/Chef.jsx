import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => {
  return (
    <div className="app-bg app-wrapper section-padding">
      <div className="app-wrapper-img app-wrapper-img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app-wrapper-info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext-cormorant">What we believe in</h1>
        <div className="chef-content">
          <div className="chef-content-quote">
            <img src={images.quote} alt="quotes" />
            <p className="p-opensans">
              As a chef i can promise that our Restaurant is the best you ever
              been.
            </p>
          </div>
          <p className="p-opensans">
            For me as a chef i can promise that our Restaurant is the best you
            ever been
          </p>
        </div>
        <div className="chef-sign">
          <p>Levin Luo</p>
          <p className="p-opensans">Chef & Founder</p>
          <img src={images.sign} alt="signature" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
