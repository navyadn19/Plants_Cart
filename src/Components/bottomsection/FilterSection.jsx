import React from "react";
import "primereact/resources/themes/saga-blue/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css";
import "./FilterSection.css";

const FilterSection = ({ title }) => {
  return (
    <>
      <div className="filter-item">
        <div className="filter-title">
          <span>{title}</span>
          <i className="pi pi-plus" />
        </div>
      </div>
    </>
  );
};

export default FilterSection;
