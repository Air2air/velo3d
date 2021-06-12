import React from "react";

import { ResponsiveLine } from "@nivo/line";

import "./styles.scss";

let data = [
  {
    id: "japan",
    color: "hsl(45, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 47,
      },
      {
        x: "helicopter",
        y: 55,
      },
      {
        x: "boat",
        y: 99,
      },
      {
        x: "train",
        y: 196,
      },
      {
        x: "subway",
        y: 295,
      },
      {
        x: "bus",
        y: 220,
      },
      {
        x: "car",
        y: 250,
      },
      {
        x: "moto",
        y: 157,
      },
      {
        x: "bicycle",
        y: 271,
      },
      {
        x: "horse",
        y: 263,
      },
      {
        x: "skateboard",
        y: 30,
      },
      {
        x: "others",
        y: 74,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(228, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 272,
      },
      {
        x: "helicopter",
        y: 93,
      },
      {
        x: "boat",
        y: 149,
      },
      {
        x: "train",
        y: 115,
      },
      {
        x: "subway",
        y: 217,
      },
      {
        x: "bus",
        y: 21,
      },
      {
        x: "car",
        y: 266,
      },
      {
        x: "moto",
        y: 15,
      },
      {
        x: "bicycle",
        y: 177,
      },
      {
        x: "horse",
        y: 151,
      },
      {
        x: "skateboard",
        y: 175,
      },
      {
        x: "others",
        y: 1,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(85, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 123,
      },
      {
        x: "helicopter",
        y: 276,
      },
      {
        x: "boat",
        y: 225,
      },
      {
        x: "train",
        y: 273,
      },
      {
        x: "subway",
        y: 137,
      },
      {
        x: "bus",
        y: 237,
      },
      {
        x: "car",
        y: 79,
      },
      {
        x: "moto",
        y: 162,
      },
      {
        x: "bicycle",
        y: 7,
      },
      {
        x: "horse",
        y: 108,
      },
      {
        x: "skateboard",
        y: 129,
      },
      {
        x: "others",
        y: 56,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(39, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 85,
      },
      {
        x: "helicopter",
        y: 58,
      },
      {
        x: "boat",
        y: 255,
      },
      {
        x: "train",
        y: 19,
      },
      {
        x: "subway",
        y: 275,
      },
      {
        x: "bus",
        y: 157,
      },
      {
        x: "car",
        y: 107,
      },
      {
        x: "moto",
        y: 267,
      },
      {
        x: "bicycle",
        y: 218,
      },
      {
        x: "horse",
        y: 32,
      },
      {
        x: "skateboard",
        y: 278,
      },
      {
        x: "others",
        y: 73,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(328, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 65,
      },
      {
        x: "helicopter",
        y: 252,
      },
      {
        x: "boat",
        y: 225,
      },
      {
        x: "train",
        y: 137,
      },
      {
        x: "subway",
        y: 106,
      },
      {
        x: "bus",
        y: 249,
      },
      {
        x: "car",
        y: 22,
      },
      {
        x: "moto",
        y: 33,
      },
      {
        x: "bicycle",
        y: 209,
      },
      {
        x: "horse",
        y: 39,
      },
      {
        x: "skateboard",
        y: 93,
      },
      {
        x: "others",
        y: 159,
      },
    ],
  },
];

const theme = {

  "textColor": "rgba(255,255,255,0.4)",
  "fontSize": 14,
  "axis": {
      "domain": {
          "line": {
              "stroke": "#777777",
              "strokeWidth": 1
          }
      },
      "ticks": {
          "line": {
              "stroke": "#777777",
              "strokeWidth": 1
          }
      }
  },
  "grid": {
      "line": {
          "stroke": "rgba(255,255,255,0.2)",
          "strokeWidth": 1
      }
  }
};

const ChartPage = () => {
  return (
    <div className="chart-div">
      <ResponsiveLine
        data={data}
        theme={theme}
        curve={"monotoneX"}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        lineWidth={2}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={0}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableArea={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default ChartPage;
