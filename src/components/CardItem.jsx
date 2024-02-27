// import React from 'react'
import "../components_css/CardItem.scss";
import Img from "../assets/download 3.png";
import Img1 from "../assets/IMAGE (4).png";
// import { BsCheck2 } from "react-icons/bs";
import Circle from "./Circle";
import Tag from "./Tag";

const CardItem = ({deta}) => {
    
  return (
    <div className="Card_item_body1">
      <div className="Card_item_body_img">
        <img src={Img} alt="Img" />
        <div>{deta?.img_name}</div>
        <div className="circle">
          <Circle number={deta?._id}/>
        </div>
        {deta?.best ? <div className="tag">
            <Tag icon={deta?.best_icon} name={deta?.best} />
        </div>:''}
        
      </div>
      <div className="Card_item_body_content">
        <div className="Card_item_body_content1">
          <span>{deta.title}</span> {deta.title_des}
        </div>
        {/* <div className="label">26% Off</div> */}
        <div className="main">Main highlights</div>
        <div className="Item">
            <p>{deta?.Main_highlights}</p>
        
          {/* <div className="Show_more">Show more</div> */}
        </div>
        
          <div className="Show_more">Show more</div>

      </div>
      <div className="Card_item_body_rating">
        <div className="Box">
          <h2>{deta?.rating}</h2>
          <p>{deta?.rev}</p>
          <img src={deta?.img} alt="Img1" />
        </div>
        <div className="btn">View</div>
      </div>
    </div>
  )
}

export default CardItem
