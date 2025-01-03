import React, { useState } from "react";
import "./BottomMenu.css";
import FilterSection from "./FilterSection";

const BottomMenu = () => {
  const [openSections, setOpenSections] = useState({
    typeOfPlants: false,
    price: false,
    nursery: false,
    idealLocation: false,
    indoorOutdoor: false,
    maintenance: false,
    plantSize: false,
    waterSchedule: false,
    color: false,
    seasonal: false,
    lightEfficient: false,
  });

  const toggleSection = (section) => {
    setOpenSections({ ...openSections, [section]: !openSections[section] });
  };

  return (
    <>
      <div className="filter-sidebar">
        <div className="filter-header">
          <p className="filter-text">Filter</p>
          <button>CLEAR ALL</button>
        </div>
        <div className="filter-section">
          <FilterSection
            title="Type of Plants"
            isOpen={openSections.typeOfPlants}
            toggle={() => toggleSection("typeOfPlants")}
          />
          <FilterSection
            title="Price"
            isOpen={openSections.price}
            toggle={() => toggleSection("price")}
          />
          <FilterSection
            title="Nursery"
            isOpen={openSections.nursery}
            toggle={() => toggleSection("nursery")}
          />
          <FilterSection
            title="Ideal Plants Location"
            isOpen={openSections.idealLocation}
            toggle={() => toggleSection("idealLocation")}
          />
          <FilterSection
            title="Indoor/ Outdoor"
            isOpen={openSections.indoorOutdoor}
            toggle={() => toggleSection("indoorOutdoor")}
          />
          <FilterSection
            title="Maintenance"
            isOpen={openSections.maintenance}
            toggle={() => toggleSection("maintenance")}
          />
          <FilterSection
            title="Plant Size"
            isOpen={openSections.plantSize}
            toggle={() => toggleSection("plantSize")}
          />
          <FilterSection
            title="Water Schedule"
            isOpen={openSections.waterSchedule}
            toggle={() => toggleSection("waterSchedule")}
          />
          <FilterSection
            title="Color"
            isOpen={openSections.color}
            toggle={() => toggleSection("color")}
          />
          <FilterSection
            title="Seasonal"
            isOpen={openSections.seasonal}
            toggle={() => toggleSection("seasonal")}
          />
          <FilterSection
            title="Light Efficient"
            isOpen={openSections.lightEfficient}
            toggle={() => toggleSection("lightEfficient")}
          />
        </div>
      </div>
    </>
  );
};

export default BottomMenu;
