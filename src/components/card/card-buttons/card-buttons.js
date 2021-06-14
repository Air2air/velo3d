import React from "react";

import { RiTimeFill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { ImDownload } from "react-icons/im";

import { motion } from "framer-motion";
import "./styles.scss";

const CardButton = (props) => {
  return (
    <div className="card-buttons mb-2 p-3 d-flex align-items-center justify-content-around">
      <motion.div
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="card-button-icon"
      >
        <RiTimeFill color="#FFF" size="1.8em" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="card-button-icon"
      >
        <FaCamera color="#FFF" size="1.8em" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="card-button-icon"
      >
        <ImDownload color="#FFF" size="1.8em" />
      </motion.div>
    </div>
  );
};

export default CardButton;
