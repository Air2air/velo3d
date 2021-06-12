import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import { Container } from "react-bootstrap";
import ChartPage from "./pages/chart/chart";
import HomePage from "./pages/home/home";
import TopicPage from "./pages/topic/topic";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
        <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/topics">
            <TopicPage />
          </Route>
          <Route path="/charts">
            <ChartPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
