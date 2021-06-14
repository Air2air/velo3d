import React from "react";

import { ImDownload } from "react-icons/im";
import { GoAlert } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import { motion } from "framer-motion";
import "./styles.scss";

let statusIcon = (jobStatus) => {
  if (jobStatus === "success") {
    return <FaCheck color="#FFF" size="1.8em" />;
  } else if (jobStatus === "alert") {
    return <GoAlert color="#FFF" size="1.8em" />;
  } else if (jobStatus === "complete") {
    return <ImDownload color="#FFF" size="1.8em" />;
  } else {
    return <MdCancel color="#FFF" size="1.8em" />;
  }
};

const CardHeader = (props) => {
  return (
    <div
      className={`card-header mb-2 p-3 d-flex align-items-center justify-content-between ${props.color}`}
    >
      <div className="card-header-title">
        <h4 style={{ padding: 0, margin: 0 }}>{props.toolName}</h4>
        <p>{props.toolDesc}</p>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
        className="card-header-download px-2"
      >
        {statusIcon(props.jobStatus)}
      </motion.div>
    </div>
  );
};

export default CardHeader;
