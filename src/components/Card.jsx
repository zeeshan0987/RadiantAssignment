// import React from 'react'
import "../components_css/Card.scss";
import Img from "../assets/download 3.png";

const Card = () => {
  return (
    <div className="card_body">
      <div className="_img">
        <img src={Img} alt="" />
      </div>
      <div className="label">
        <div>20% Off</div>
        <div>Limited time</div>
      </div>
      <div className="card_title">
        <div>Webbuilder 1</div>
      </div>
      <div className="card_des">Computer Modern clasic with wix support</div>
      <div className="card_price">
        <div className="card_price1">$39.96</div>
        <div className="card_price2">$49.96</div>
        <div className="card_price3">(20% Off)</div>
      </div>
      <div className="card_btn">
      View Deal
      </div>
    </div>
  );
};

export default Card;
