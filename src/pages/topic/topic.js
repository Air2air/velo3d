import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const dataSource = "./json/topics.json";

function TopicPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [topics, setTopic] = useState([]);

  useEffect(() => {
    fetch(dataSource)
      .then((data) => data.json())
      .then(({ topics }) => {
        setTopic(topics);
      });
    setCurrentPage(0);
  }, []);

  const currentPageData = topics.slice(currentPage, currentPage + 1);
  const topicsCount = Object.keys(topics).length;

  function handlePrevClick() {
    let prevPage = currentPage - 1;
    if (prevPage >= 0) {
      setCurrentPage(prevPage);
      console.log(prevPage);
    } else {
      setCurrentPage(topicsCount - 1);
      console.log("Can't go back");
    }
  }

  function handleNextClick() {
    let nextPage = currentPage + 1;
    if (nextPage <= topicsCount - 1) {
      setCurrentPage(nextPage);
      console.log(nextPage);
    } else {
      setCurrentPage(0);
      console.log("Reached the end");
    }
  }

  function changeColor(color) {
    document.body.removeAttribute("class");
    document.body.classList.add(color);
  }

  return (
    <Layout>
      {currentPageData.map((topic) => {
        const { topicId, content, firstButton, secondButton, color } = topic;

        changeColor(color);

        return (
          <div key={topicId}>
            <Row>
              <Col className="d-flex align-items-center justify-content-end content px-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="d-flex justify-content-end w-75 text-right  px-5"
                >
                  {content}
                </motion.div>
              </Col>
            </Row>
            <Row>
              <Col className="p-0 m-0">
                <div
                  className="topics-button left p-3 pb-5"
                  onClick={handlePrevClick}
                >
                  {firstButton}
                </div>
              </Col>
              <Col className="p-0 m-0">
                <div
                  className="topics-button right p-3 pb-5"
                  onClick={handleNextClick}
                >
                  {secondButton}
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </Layout>
  );
}

export default TopicPage;
