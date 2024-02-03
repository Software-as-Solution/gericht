import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { useRef } from "react";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  function handleScroll(direction) {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="gallery flex-center">
      <div className="gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext-cormorant">Photo Gallery</h1>
        <p className="p-opensans" style={{ color: "#AAA", marginTop: "rem" }}>
          The best food you have seen
        </p>
        <button type="button" className="custom-button">
          View more
        </button>
      </div>
      <div className="gallery-images">
        <div className="gallery-images-container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="gallery-images-card flex-center"
              key={`gallery-images-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery-image-icon" />
            </div>
          ))}
        </div>
        <div className="gallery-images-arrows">
          <BsArrowLeftShort
            className="gallery-arrow-icon"
            onClick={() => handleScroll("left")}
          />
          <BsArrowRightShort
            className="gallery-arrow-icon"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
