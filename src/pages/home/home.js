import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import Card from "../../components/card/card";
import "./styles.scss";

const dataSource = "./json/tools.json";

function HomePage() {
  // const [currentPage, setCurrentPage] = useState(0);
  const [tools, setTool] = useState([]);

  useEffect(() => {
    fetch(dataSource)
      .then((data) => data.json())
      .then(({ tools }) => {
        setTool(tools);
      });
    // setCurrentPage(0);
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
      <Card />
    </Layout>
  );
}

export default HomePage;
