import React from "react";

import LineChart from "../../linechart/linechart";
// import { motion } from "framer-motion";

import timeDiffCalc from "./time.js";
import "./styles.scss";


function CardTime(props) {
  return (
    <div className="px-4">
      {props.startTime} {props.endTime}
      <br />
      {timeDiffCalc(new Date(props.startTime), new Date(props.endTime))}
      <LineChart />
    </div>
  );
}

export default CardTime;
