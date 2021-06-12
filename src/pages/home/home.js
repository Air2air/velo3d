import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./styles.scss";

const dataSource = "./json/tools.json";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [tools, setTool] = useState([]);

  useEffect(() => {
    fetch(dataSource)
      .then((data) => data.json())
      .then(({ tools }) => {
        setTool(tools);
      });
    setCurrentPage(0);
  }, []);

  const section = "Dashboard";
  const title = "Tools";
  const countTotal = Object.keys(tools).length;

  return (
    <Layout>
      <Breadcrumb
        section={section}
        title={title}
        countTotal={countTotal}
        countCompleted={3}
        countSuccess={1}
        countWarning={1}
        countDanger={1}
      />
      <Row xs={1} sm={1} md={2} lg={2} xl={3}>
        {tools.map((tool) => {
          const {
            toolId,
            toolName,
            name,
            progress,
            layerCurrent,
            layerTotal,
            color,
            image,
          } = tool;
          return (
            <Col key={toolId} className="mb-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className={`panel ${color}`}
              >
                <div
                  className="panel-background-image"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="panel-content p-4">
                  <h4>{toolName}</h4>
                  <p>{name}</p>
                </div>
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
}

export default HomePage;
