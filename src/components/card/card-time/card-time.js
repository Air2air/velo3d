import React from "react";
import LineChart from "../../linechart/linechart";
import timeDiffCalc from "./time.js";
import "./styles.scss";


function CardTime(props) {
  return (
    <div className="card-time">
      {props.startTime} {props.endTime}
      <br />
      {timeDiffCalc(new Date(props.startTime), new Date(props.endTime))}
      <LineChart />
    </div>
  );
}

export default CardTime;
