import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import OrderPlacedPage from "./Components/Orders/OrderPlacedPage";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order-placed" element={<OrderPlacedPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
