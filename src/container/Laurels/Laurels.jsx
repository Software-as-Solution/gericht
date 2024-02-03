import "./Laurels.css";
import { images, data } from "../../constants";
import React from "react";
import { SubHeading } from "../../components";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="laurels-awards-card">
    <img src={imgUrl} alt="award" />
    <div className="laurels-awards-card-content">
      <p className="p-cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p-cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app-bg app-wrapper section-padding" id="awards">
      <div className="app-wrapper-info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext-cormorant">Our Laurels</h1>
        <div className="laurels-awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app-wrapper-img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
