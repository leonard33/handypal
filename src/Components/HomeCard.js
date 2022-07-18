/* eslint-disable react/prop-types */
import React from "react";
import "./HomeCard.css";

function HomeCard({ src, title, description }) {
  return (
    <div className="home_card">
      <img src={src} alt="" />

      <div className="card_info">
        <h3>{title} </h3>
        <h5>{description}</h5>
      </div>
    </div>
  );
}

export default HomeCard;
