// import React from 'react'
import "../components_css/Card_item.scss";
import Img from "../assets/download 3.png";
import Img1 from "../assets/IMAGE (4).png";
import { BsCheck2 } from "react-icons/bs";
import Circle from "./Circle";

const Card_item = () => {
  return (
    <div className="Card_item_body">
      <div className="Card_item_body_img">
        <img src={Img} alt="Img" />
        <div>CDK</div>
        <div className="circle">
          <Circle/>
        </div>
      </div>
      <div className="Card_item_body_content">
        <div className="Card_item_body_content1">
          <span>CDK Resposive Builder:</span> An extensive library of widgets
          and apps, and detailed step-by-step guides
        </div>
        <div className="label">26% Off</div>
        <div className="main">Main highlights</div>
        <div className="Item">
          <div className="container">
            <div>9.9</div>
            <p>Building Responsive</p>
          </div>
          <div className="container">
            <div>8.9</div>
            <p>Cool</p>
          </div>
          <div className="container">
            <div>8.9</div>
            <p>Docs</p>
          </div>
        
          {/* <div className="Show_more">Show more</div> */}
        </div>
        <ul>
            <span>Why we love it</span>
            <li>
              <div>
                <BsCheck2 />
              </div>
              <span>Documentation</span>
            </li>
            <li>
              <div>
                <BsCheck2 />
              </div>
              <span>Easy Use</span>
            </li>
            <li>
              <div>
                <BsCheck2 />
              </div>
              <span>Out of box</span>
            </li>
          </ul>
          <div className="Show_more">Show more</div>

      </div>
      <div className="Card_item_body_rating">
        <div className="Box">
          <h2>9.1</h2>
          <p>Very Good</p>
          <img src={Img1} alt="Img1" />
        </div>
        <div className="btn">View</div>
      </div>
    </div>
  );
};

export default Card_item;
