import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import timeDiffCalc from "./time.js";
import "./styles.scss";

function CardTime(props) {
  return (
    <div className="card-time p-4 d-flex flex-column justify-content-between">
      <div className="time-total mt-5">
        <div className="d-flex">
          <div class="legend">Total time:</div>
          {timeDiffCalc(new Date(props.startTime), new Date(props.endTime))}
        </div>
        <div className="d-flex">
          <div class="legend">Start time:</div>
          {props.startTime}
        </div>
        <div className="d-flex">
          <div class="legend">End time:</div>
          {props.endTime}
        </div>
      </div>
      <div className="chart-div mt-3">
        {props.isCompleted === true ? (
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
              data={[{ country: "AD", time: props.completion }]}
              indexBy="country"
              keys={["time"]}
              labelTextColor="inherit:darker(1.4)"
              maxValue={100}
              enableLabel={false}
              enableGridY={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CardTime;
