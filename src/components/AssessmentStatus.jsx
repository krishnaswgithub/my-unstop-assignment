import React from "react";
import totalAssessment from "../assets/svgs/totalAssessment.svg";
import userIcon from "../assets/svgs/userIcon.svg";
import verticalStroke from "../assets/svgs/verticalStroke.svg";
import candidateSource from "../assets/svgs/candidateSource.svg";
import shareIcon from "../assets/svgs/shareIcon.svg";

export default function AssessmentStats({ showStats }) {
  return (
    <div>
      <div className="assessmentStats">
        <div className="mainCont-heading">Assessments Overview</div>
        <div className="assessmentStatsOverview">
          <div className="assessmentStatsMainItem">
            <div className="assessmentStatsSubHeading">Total Assessment</div>
            <div className="assessmentStatsItem">
              <div className="totalAssessmentIcon icon">
                <img src={totalAssessment} alt="total-assessment-icon" />
              </div>
              <div className="assessmentStatsData">34</div>
            </div>
          </div>
          <div className="assessmentStatsMainItem">
            <div className="assessmentStatsSubHeading">Candidates</div>
            <div className="assessmentStatsItem">
              <div className="icon">
                <img src={userIcon} alt="user-icon" />
              </div>
              <div>
                <div className="assessmentStatsSubItem">
                  <div className="assessmentStatsData">11,145</div>
                  <div className="assessmentStatsSubData">+89</div>
                </div>
                <div className="assessmentStatsText">Total Candidate</div>
              </div>
              <div className="verticalStroke">
                <img src={verticalStroke} alt="stroke-icon" />
              </div>
              <div>
                <div className="assessmentStatsSubItem">
                  <div className="assessmentStatsData">1,14</div>
                  <div className="assessmentStatsSubData">+89</div>
                </div>
                <div className="assessmentStatsText">Who Attamped</div>
              </div>
            </div>
          </div>
          <div className="assessmentStatsMainItem">
            <div className="assessmentStatsSubHeading">Candidates Source</div>
            <div className="assessmentStatsItem">
              <div className="icon">
                <img src={candidateSource} alt="candidate-icon" />
              </div>
              <div>
                <div className="assessmentStatsSubItem">
                  <div className="assessmentStatsData">11,000</div>
                  <div className="assessmentStatsSubData">+89</div>
                </div>
                <div className="assessmentStatsText">E-mail</div>
              </div>
              <div className="verticalStroke">
                <img src={verticalStroke} alt="stroke-icon" />
              </div>
              <div>
                <div className="assessmentStatsSubItem">
                  <div className="assessmentStatsData">145</div>
                  <div className="assessmentStatsSubData">+89</div>
                </div>
                <div className="assessmentStatsText">Social Share</div>
              </div>
              <div className="verticalStroke">
                <img src={verticalStroke} alt="stroke-icon" />
              </div>
              <div>
                <div className="assessmentStatsSubItem">
                  <div className="assessmentStatsData">145</div>
                  <div className="assessmentStatsSubData">+89</div>
                </div>
                <div className="assessmentStatsText">Unique Link</div>
              </div>
            </div>
          </div>
          <div className="assessmentStatsMainItem">
            <div className="assessmentStatsSubHeading">Total Purpose</div>
            <div className="assessmentStatsItem">
              <div className="icon">
                <img src={shareIcon} alt="share-icon" />
              </div>
              <div className="assessmentStatsData">11</div>
            </div>
          </div>
        </div>
      </div>
      {showStats ? (
        <>
          <div className="assessmentStatsOverview mobile-view">
            <div className="assessmentStatsFirstBox">
              <div className="assessmentStatsMainItem">
                <div className="assessmentStatsSubHeading">
                  Total Assessment
                </div>
                <div className="assessmentStatsItem">
                  <div className="totalAssessmentIcon icon">
                    <img src={totalAssessment} alt="total-assessment-icon" />
                  </div>
                  <div className="assessmentStatsData">34</div>
                </div>
              </div>
              <div className="assessmentStatsMainItem">
                <div className="assessmentStatsSubHeading">Total Purpose</div>
                <div className="assessmentStatsItem">
                  <div className="icon">
                    <img src={shareIcon} alt="share-icon" />
                  </div>
                  <div className="assessmentStatsData">11</div>
                </div>
              </div>
            </div>
            <div>
              <div className="assessmentStatsMainItem">
                <div className="assessmentStatsSubHeading">Candidates</div>
                <div className="assessmentStatsItem">
                  <div className="icon">
                    <img src={userIcon} alt="user-icon" />
                  </div>
                  <div>
                    <div className="assessmentStatsSubItem">
                      <div className="assessmentStatsData">11,145</div>
                      <div className="assessmentStatsSubData">+89</div>
                    </div>
                    <div className="assessmentStatsText">Total Candidate</div>
                  </div>
                  <div className="verticalStroke">
                    <img src={verticalStroke} alt="stroke-icon" />
                  </div>
                  <div>
                    <div className="assessmentStatsSubItem">
                      <div className="assessmentStatsData">1,14</div>
                      <div className="assessmentStatsSubData">+89</div>
                    </div>
                    <div className="assessmentStatsText">Who Attamped</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="assessmentStatsLastBox">
              <div className="assessmentStatsMainItem">
                <div className="assessmentStatsSubHeading">
                  Candidates Source
                </div>
                <div className="assessmentStatsItem">
                  <div className="icon">
                    <img src={candidateSource} alt="candidate-icon" />
                  </div>
                  <div>
                    <div className="assessmentStatsSubItem">
                      <div className="assessmentStatsData">11,000</div>
                      <div className="assessmentStatsSubData">+89</div>
                    </div>
                    <div className="assessmentStatsText">E-mail</div>
                  </div>
                  <div className="verticalStroke">
                    <img src={verticalStroke} alt="stroke-icon" />
                  </div>
                  <div>
                    <div className="assessmentStatsSubItem">
                      <div className="assessmentStatsData">145</div>
                      <div className="assessmentStatsSubData">+89</div>
                    </div>
                    <div className="assessmentStatsText">Social Share</div>
                  </div>
                  <div className="verticalStroke">
                    <img src={verticalStroke} alt="stroke-icon" />
                  </div>
                  <div>
                    <div className="assessmentStatsSubItem">
                      <div className="assessmentStatsData">145</div>
                      <div className="assessmentStatsSubData">+89</div>
                    </div>
                    <div className="assessmentStatsText">Unique Link</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
