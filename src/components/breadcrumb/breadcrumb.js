import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillCaretRight } from "react-icons/ai";
import "./styles.scss";

const Breadcrumb = (props) => {
  return (
    <Row className="breadcrumb p-0 mb-5">

      <Col className="d-flex align-items-center justify-content-left">
        <span>{props.section} </span>
        <AiFillCaretRight size=".7em" className="icon mx-2" />
        <span>{props.title} </span>
        <div className="count total d-flex align-items-center justify-content-center mx-2">
          {props.countTotal}
        </div>
      </Col>

      <Col className="d-flex align-items-center justify-content-end">
        <div className="count completed d-flex align-items-center justify-content-center mx-2">
          {props.countCompleted}
        </div>
        <div className="count success d-flex align-items-center justify-content-center mx-2">
          {props.countSuccess}
        </div>
        <div className="count warning d-flex align-items-center justify-content-center mx-2">
          {props.countWarning}
        </div>
        <div className="count danger d-flex align-items-center justify-content-center mx-2">
          {props.countDanger}
        </div>
      </Col>
    </Row>
  );
};

export default Breadcrumb;
