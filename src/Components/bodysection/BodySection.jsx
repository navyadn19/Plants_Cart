import React, { useState } from "react";
import "./BodySection.css";
import img from "../../assets/plant-1.jpeg";

const BodySection = () => {
  const [activeButton, setActiveButton] = useState("Plants");

  const images = [
    {
      src: img,
      description: "A bit of green can really change the vibe of a room.",
    },
    {
      src: img,
      description: "A bit of green can really change the vibe of a room.",
    },
    {
      src: img,
      description: "A bit of green can really change the vibe of a room.",
    },
    {
      src: img,
      description: "A bit of green can really change the vibe of a room.",
    },
    {
      src: img,
      description: "A bit of green can really change the vibe of a room.",
    },
    {
      src: img,
      description: "A bit of green can really change the vibe of a room.",
    },
    {
      src: img,
      description: "A bit of green can really change the vibe of a room.",
    },
    {
      src: img,
      description: "A bit of green can really change the vibe of a room.",
    },
    {
      src: img,
      description: "A bit of green can really change the vibe of a room.",
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const imagesToShow = 6; // Number of images to show at once

  const nextImages = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex + imagesToShow < images.length) {
        return prevIndex + imagesToShow;
      }
      return prevIndex; // Stay at the same index if at the end
    });
  };

  const prevImages = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex - imagesToShow >= 0) {
        return prevIndex - imagesToShow;
      }
      return prevIndex; // Stay at the same index if at the start
    });
  };
  return (
    <div className="select-button">
      <div className="button-container">
        <button
          className={`btn ${activeButton === "Plants" ? "active" : ""}`}
          onClick={() => setActiveButton("Plants")}
        >
          Plants
        </button>
        <button
          className={`btn ${activeButton === "Pots" ? "active" : ""}`}
          onClick={() => setActiveButton("Pots")}
        >
          Pots
        </button>
      </div>
      <p className="paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <h3 className="nursery-title">Nursery</h3>
      <div className="gallery-container">
        <div className="image-gallery">
          <button
            className="arrow left-arrow"
            onClick={prevImages}
            disabled={startIndex === 0}
          >
            ◀
          </button>

          {images
            .slice(startIndex, startIndex + imagesToShow)
            .map((images, index) => (
              <div key={index} className="image-item">
                <img
                  src={images.src}
                  alt={`Gallery Image ${index}`}
                  className="gallery-image"
                />
                <p className="image-description">{images.description}</p>
              </div>
            ))}

          <button
            icon="pi pi-arrow-right"
            className="arrow right-arrow"
            onClick={nextImages}
            disabled={startIndex + imagesToShow >= images.length}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
