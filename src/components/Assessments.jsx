import React from "react";
import Card from "./Card";
import CreateAssessment from "./CreateAssessment";
import searchIcon from "../assets/svgs/searchIcon.svg";
import filterIcon from "../assets/svgs/filterIcon.svg";
import barchartIcon from "../assets/svgs/barchartIcon.svg";
import "../styles/style.css";

function Assessments({ form, setForm, assessment, showStats, setShowStats }) {
  function showStatsHandler() {
    if (showStats) {
      setShowStats(false);
    } else {
      setShowStats(true);
    }
  }

  return (
    <div className="myAssessment">
      <div className="myAssessment-top-panel">
        <div className="mainCont-heading">My Assessment</div>
        <div className="mainCont-icons">
          <div className="filter-icons">
            <img src={searchIcon} alt="search-icon" />
          </div>
          <div className="filter-icons">
            <img src={filterIcon} alt="filter-icon" />
          </div>
          <div
            className={`filter-icons ${
              showStats ? "selected-filter-icon" : ""
            }`}
            onClick={() => showStatsHandler()}
          >
            <img src={barchartIcon} alt="barchart-icon" />
          </div>
        </div>
      </div>
      <div className="assessmentCards">
        <CreateAssessment form={form} setForm={setForm} />
        {assessment.length > 0 ? (
          assessment.map((element, key) => {
            return <Card cardDetails={element} key={key} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Assessments;
