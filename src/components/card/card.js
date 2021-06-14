import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";

import { RiTimeFill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { ImDownload } from "react-icons/im";

import { Row, Col, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import CardHeader from "./card-header/card-header";
import CardImage from "./card-image/card-image";
import CardDownload from "./card-download/card-download";
import CardTime from "./card-time/card-time";

import "./styles.scss";

// const dataSource = toolsJson;

const Card = () => {
  const [tools, setTool] = useState([]);

  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
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
          isCompleted,
          startTime,
          endTime,
          color,
          image,
          jobStatus,
          completion,
        } = tool;
        return (
          <Col key={toolId} className="mb-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.15 }}
              className="card"
            >
              <CardHeader
                color={color}
                toolName={toolName}
                toolDesc={toolDesc}
                jobStatus={jobStatus}
              />

              <div className="card-content d-flex flex-column justify-content-between p-0">
                <Tab.Container id={toolId} defaultActiveKey="first">
                  <div className="card-buttons d-flex align-items-center justify-content-around">
                    <div className="d-flex justify-content-center align-items-center card-button-icon">
                      <Nav.Link eventKey="first">
                        <RiTimeFill color="#FFF" size="1.8em" />
                      </Nav.Link>
                    </div>
                    <div className="d-flex justify-content-center align-items-center card-button-icon">
                      <Nav.Link eventKey="second">
                        <FaCamera color="#FFF" size="1.8em" />
                      </Nav.Link>
                    </div>
                    <div className="d-flex justify-content-center align-items-center card-button-icon">
                      <Nav.Link eventKey="third">
                        <ImDownload color="#FFF" size="1.8em" />
                      </Nav.Link>
                    </div>
                  </div>

                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <CardTime
                        startTime={startTime}
                        endTime={endTime}
                        isCompleted={isCompleted}
                        completion={completion}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <CardImage image={image} endTime={endTime} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <CardDownload
                        startTime={startTime}
                        endTime={endTime}
                        isCompleted={isCompleted}
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </motion.div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Card;
