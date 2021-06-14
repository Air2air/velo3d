import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import timeDiffCalc from "./time.js";
import "./styles.scss";

function CardTime(props) {
  return (
    <div className="card-time p-4 d-flex flex-column justify-content-center">

      <div className="time-total">
        <span class="legend">Total time:</span>
        {timeDiffCalc(new Date(props.startTime), new Date(props.endTime))}
      </div>
      <div className="time-total">
        <span class="legend">Start time:</span>
        {props.startTime}
      </div>
      <div className="time-total">
        <span class="legend">End time:</span>
        {props.endTime}
      </div>

      {props.isCompleted == true ? (
        ""
      ) : (
        <div className="chart-wrapper p-0">
          <ResponsiveBar
          borderColor="none"
            colors={{ scheme: "blues" }}
            padding={0}
            height={30}
            layout="horizontal"
            animate={true}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            data={[{ country: "AD", time: 2 }]}
            indexBy="country"
            keys={["time"]}
            labelTextColor="inherit:darker(1.4)"
            maxValue={3}
            enableLabel={false}
            enableGridY={false}
          />
        </div>
      )}
    </div>
  );
}

export default CardTime;
