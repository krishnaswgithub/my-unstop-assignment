import addIcon from "../assets/svgs/addIcon.svg";
import "../styles/style.css";

import React from "react";

function CreateAssessment({ form, setForm }) {
  return (
    <div className="card create-Card">
      <div
        className="addIcon"
        onClick={() => {
          setForm(true);
        }}
      >
        <img src={addIcon} alt="add-icon" />
      </div>
      <div className="mainCont-heading">New Assessment</div>
      <div className="card-subtext">
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!
      </div>
    </div>
  );
}

export default CreateAssessment;