import React from "react";
import { RiTimeFill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { ImDownload } from "react-icons/im";
import "./styles.scss";







const CardButton = (props) => {
  return ( 
    <div className="card-buttons d-flex align-items-center justify-content-around">
      <div id={1} className="d-flex justify-content-center align-items-center card-button-icon">
        <RiTimeFill color="#FFF" size="1.8em" />
      </div>
      <div id={2} className="d-flex justify-content-center align-items-center card-button-icon">
        <FaCamera color="#FFF" size="1.8em" />
      </div>
      <div id={3} className="d-flex justify-content-center align-items-center card-button-icon">
        <ImDownload color="#FFF" size="1.8em" />
      </div>
    </div>
  );
};

export default CardButton;
