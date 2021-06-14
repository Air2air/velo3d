import React from "react";
import "./styles.scss";

function CardImage(props) {
  return (
    <div
      className="card-image"
      style={{ backgroundImage: `url(${props.image})` }}
    ></div>
  );
}

export default CardImage;
