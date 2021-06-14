import React from "react";
import "./styles.scss";

const imgPath = (image) => {
  const newPath = require(`./../../../images/${image}.jpg`).default;
  return newPath;
};

function CardImage(props) {
  return (
    <div
      className="card-image p-3 d-flex flex-column justify-content-end"
      style={{ backgroundImage: `url(${imgPath(props.image)})` }}
    >
      <div className="image-meta d-flex justify-content-between">
        <div className="image-legend">Layer 1175/2342</div>
        <div className="image-timestamp">{props.endTime}</div>
      </div>
    </div>
  );
}

export default CardImage;
