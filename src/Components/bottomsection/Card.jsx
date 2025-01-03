import React, { useState } from "react";
import { Rating } from "primereact/rating";
import { useNavigate } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Or any PrimeReact theme you use
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Card.css";
import plant1 from "../../assets/plant-2.jpeg";

const Card = () => {
  const navigate = useNavigate();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleNavigate = () => {
    navigate("/order-placed");
  };

  const handleAddToCart = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div className="card">
        <img src={plant1} alt="product image" />
        <p onClick={handleNavigate}>View Product</p>
      </div>
      <div className="card-details">
        <h3>Monsterra</h3>
        <p>Indoor plant, low maintainance</p>
        <Rating value={5} readOnly stars={5} cancel={false} />
        <div className="rupees">
          <p style={{ textDecoration: "line-through" }}>₹ 359</p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            299
          </p>
        </div>
        <div>
          <button className="add-button" onClick={handleAddToCart}>
            {" "}
            - Add to cart +{" "}
          </button>
          <button className="rent-button">Buy on Rent</button>
        </div>
      </div>
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Item Added to Cart</h3>
            <p>Monsterra has been successfully added to your cart.</p>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
