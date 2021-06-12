import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import LineChart from "../../components/linechart/linechart";
import { ImDownload } from "react-icons/im";
import { GoAlert } from "react-icons/go";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./styles.scss";
import { Line } from "@nivo/line";

const dataSource = "./json/tools.json";

function getDaysBetweenDates(d0, d1) {
  // To set two dates to two letiables
  let date1 = new Date(d0);
  let date2 = new Date(d1);

  // To calculate the time difference of two dates
  let Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  //To display the final no. of days (result)
  return (
    "Total number of days between dates  <br>" +
    date1 +
    "<br> and <br>" +
    date2 +
    " is: <br> " +
    Difference_In_Days
  );
}

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
            hasReport,
            progress,
            layerCurrent,
            layerTotal,
            startTime,
            endTime,
            color,
            image,
          } = tool;
          return (
            <Col key={toolId} className="mb-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.03 }}
                className={`panel ${color}`}
              >
                <div
                  className="panel-background-image"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="panel-content d-flex flex-column justify-content-between p-0">
                  <div className="panel-header mb-4 p-4">
                    <div className="panel-header-title">
                      <h4>{toolName}</h4>
                    </div>
                    <div className="panel-header-download">
                      {hasReport ? (
                        <ImDownload color="#FFF" size="2em" />
                      ) : (
                        <GoAlert color="#FFF" size="2em" />
                      )}
                    </div>
                  </div>
                  <div className="px-4">
                    {getDaysBetweenDates({ startTime, endTime })}
                    <p>{name}</p>
                  </div>
                  <LineChart />
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
