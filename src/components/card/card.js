import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import CardHeader from "./card-header/card-header";
import CardButtons from "./card-buttons/card-buttons";
import CardImage from "./card-image/card-image";
import CardDownload from "./card-download/card-download";
import CardTime from "./card-time/card-time";
import "./styles.scss";

const dataSource = "./json/tools.json";

function Card() {
  const [tools, setTool] = useState([]);

  useEffect(() => {
    fetch(dataSource)
      .then((data) => data.json())
      .then(({ tools }) => {
        setTool(tools);
      });
  }, []);

  return (
    <Row xs={1} sm={1} md={2} lg={2} xl={3}>
      {tools.map((tool) => {
        const {
          toolId,
          toolName,
          toolDesc,
          hasReport,
          startTime,
          endTime,
          color,
          image,
          jobStatus,
        } = tool;
        return (
          <Col key={toolId} className="mb-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.03 }}
              className="card"
            >
              <CardHeader
                color={color}
                toolName={toolName}
                toolDesc={toolDesc}
                jobStatus={jobStatus}
              />
              <div className="card-content d-flex flex-column justify-content-between p-0">
                <CardButtons />
                <CardImage image={image} />
                <CardDownload
                  startTime={startTime}
                  endTime={endTime}
                  hasReport={hasReport}
                />
                <CardTime startTime={startTime} endTime={endTime} />
              </div>
            </motion.div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Card;
