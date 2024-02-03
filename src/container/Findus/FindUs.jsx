import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import React from "react";

const FindUs = () => {
  return (
    <div className="app-bg app-wrapper section-padding" id="contact">
      <div className="app-wrapper-info">
        <SubHeading title="Contact" />
        <h1 className="headtext-cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="wrapper-content">
          <p className="p-opensans">Lane Ends Bungalow, Whatcroft Hall Lane</p>
          <p
            className="p-cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p-opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p-opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button className="custom-button" style={{ marginTop: "2rem" }}>
          Visit us
        </button>
      </div>
      <div className="app-wrapper-img">
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  );
};

export default FindUs;
