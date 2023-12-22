import React from "react";
import AssessmentStats from "../components/AssessmentStatus";
import Assessments from "../components/Assessments";
import addIcon from "../assets/svgs/addIcon.svg";

function AssessmentsPage({
  form,
  setForm,
  assessment,
  showStats,
  setShowStats,
}) {
  return (
    <div className="main-data">
      <AssessmentStats showStats={showStats} />
      <Assessments
        form={form}
        setForm={setForm}
        assessment={assessment}
        showStats={showStats}
        setShowStats={setShowStats}
      />
      <div
        className="create-icon"
        onClick={() => {
          setForm(true);
        }}
      >
        <img src={addIcon} alt="add-icon" />
      </div>
    </div>
  );
}
export default AssessmentsPage;