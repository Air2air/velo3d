import React from "react";
import { VscFilePdf } from "react-icons/vsc";
import { AiOutlineCaretDown } from "react-icons/ai";
import "./styles.scss";

function CardDownload() {
  return (
    <div className="card-download p-4 d-flex justify-content-center align-items-center">
      <div className="report-box d-flex align-items-center p-4 mt-4">
        <VscFilePdf size="2.2em" />
        <div className="download-text">
          PB-Assure-v1-0_B-1.pdf
          <div>1.03 mb</div>
        </div>
      </div>
      <AiOutlineCaretDown size="2em" className="download-carat" />
    </div>
  );
}

export default CardDownload;
