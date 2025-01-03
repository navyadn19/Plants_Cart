import React from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <>
      <div className="product-list-header">
        <div className="product-count">300 products</div>
        <button className="sort-by">
          SORT BY<div className="pi pi-chevron-down"></div>
        </button>
      </div>
      <ProductCard />
    </>
  );
};

export default ProductList;
