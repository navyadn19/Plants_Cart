import React, { useState } from "react";
import "./ProductCard.css";
import Card from "./Card";
import FooterSection from "../FooterSection/FooterSection";

const ProductCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const totalCards = [
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
  ];
  const visibleCards = isExpanded ? totalCards : totalCards.slice(0, 3);
  return (
    <>
      <div className="card-row">
        {visibleCards.map((card, index) => (
          <React.Fragment key={index}>{card}</React.Fragment>
        ))}
      </div>
      <button
        className="view-more-btn"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? "View Less" : "View More"}
      </button>
      <FooterSection />
    </>
  );
};

export default ProductCard;
