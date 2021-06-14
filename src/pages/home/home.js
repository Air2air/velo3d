import React  from "react";
import Layout from "../../components/layout/layout";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import Card from "../../components/card/card";
import "./styles.scss";

// import * as tools from "./../../data.json";

import tools from "./../../data";

function HomePage() {

  // const [tools, setTool] = useState([]);

  // useEffect(() => {
  //   fetch("data.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //     },
  //   })
  //     .then((data) => data.json())
  //     .then(({ tools }) => {
  //       setTool(tools);
  //     });
  // }, []);

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
