import React, { useState } from "react";
import SkillBox from "./SkillBox";
import crossIcon from "../assets/svgs/crossIcon.svg";
import { toast } from "react-hot-toast";

function Form({ form, setForm, assessment, setAssessment }) {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("none");
  const [numQuestions, setNumQuestions] = useState("none");
  const [skills, setSkills] = useState([]);
  const [skillValue, setSkillValue] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  function addSkill() {
    if (skills.includes(skillValue.trim())) {
      setSkillValue("");
    } else {
      if (skillValue.trim().length > 0)
        setSkills([...skills, skillValue.trim()]);
      setSkillValue("");
    }
  }
  //Function to manage the display of the assessment form when user clicks outside the form area
  function onClickHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  //Function to change the states as soon as the values in the input field changes
  function onChangeHandler(e, type) {
    let val = e.target.value;
    if (type === "name") {
      setName(val);
    } else if (type === "purpose") {
      setPurpose(val);
    } else if (type === "description") {
      setNumQuestions(val);
    } else if (type === "skills") {
      setSkillValue(val);
    } else if (type === "duration") {
      setDuration(val);
    } else if (type === "date") {
      setDate(val);
    }
    return;
  }

  //Function to detect when the Enter Key is pressed to store the different skills
  function keyChangeHandler(e) {
    if (e.key === "Enter") {
      if (skills.includes(skillValue.trim())) {
        setSkillValue("");
      } else {
        if (skillValue.trim().length > 0) skills.push(skillValue.trim());
        setSkillValue("");
      }
    }
  }

  //Function to add the newly created assessment in the existing list of the assessments
  function addAssessment(e) {
    const assessmentObj = {
      name,
      purpose,
      numQuestions,
      duration,
      date,
    };

    const regex = new RegExp("[0-9]{2}:[0-9]{2}:[0-9]{2}"); //regex expression for checking the duration of the assessment
    if (
      name.length > 0 &&
      purpose.length > 0 &&
      purpose !== "none" &&
      numQuestions.length > 0 &&
      numQuestions !== "none" &&
      duration.length === 8 &&
      regex.test(duration) &&
      date.length > 0 &&
      !isNaN(new Date(date))
    ) {
      let tmpAssessment = [...assessment];
      tmpAssessment.push(assessmentObj);
      setAssessment(tmpAssessment);
      setForm(false);
      toast.success("Created the new assessment successfully");
    } else {
      if (name.length <= 0) {
        toast.error("Name field can't be empty");
      } else if (purpose.length === "none") {
        toast.error("Purpose for the assessment is required");
      } else if (numQuestions === "none") {
        toast.error("Assessment is required to have some questions");
      } else if (
        duration.length < 8 ||
        duration.length > 8 ||
        !regex.test(duration)
      ) {
        toast.error("Duration should be in the correct format i.e. HH:MM:SS");
      } else if (date.length <= 0 || isNaN(new Date(date))) {
        toast.error("Date is invalid, it must be in MM-DD-YYYY format");
      } else {
        toast.error("All the fields of the form must be filled");
      }
    }
  }

  return (
    <div
      className="displayFormWrapper"
      onClick={() => {
        setForm(false);
      }}
    >
      <div
        className="assessmentForm"
        onClick={(e) => {
          return onClickHandler(e);
        }}
      >
        <form>
          <div className="formHeader">
            <div>Create new assessment</div>
            <div
              className="crossIcon"
              onClick={() => {
                setForm(false);
              }}
            >
              <img src={crossIcon} alt="crossicon" />
            </div>
          </div>
          <div className="formBody">
            <div className="formItem">
              <div>Name of assessment</div>
              <div className="input">
                <input
                  type="text"
                  name="assessment_name"
                  id="assessment_name"
                  value={name}
                  placeholder="Type Here"
                  onChange={(e) => onChangeHandler(e, "name")}
                />
              </div>
            </div>
            <div className="formItem">
              <div>Purpose of the test is</div>
              <div className="input">
                <select
                  name="purpose"
                  id="purpose"
                  onChange={(e) => onChangeHandler(e, "purpose")}
                >
                  <option value="none" defaultChecked>
                    Select
                  </option>
                  <option value="Job">Job</option>
                  <option value="Hackathon">Hackathon</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>
            <div className="formItem">
              <div>Description</div>
              <div className="input">
                <select
                  name="description"
                  id="description"
                  onChange={(e) => onChangeHandler(e, "description")}
                >
                  <option value="none" defaultChecked>
                    Select
                  </option>
                  <option value="10">10 Questions</option>
                  <option value="20">20 Questions</option>
                  <option value="30">30 Questions</option>
                  <option value="40">40 Questions</option>
                  <option value="50">50 Questions</option>
                  <option value="60">60 Questions</option>
                </select>
              </div>
            </div>
            <div className="formItem">
              <div>Skills</div>
              <div className="input">
                <div>
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    placeholder="Type here"
                    value={skillValue}
                    onChange={(e) => onChangeHandler(e, "skills")}
                    onKeyDown={(e) => keyChangeHandler(e)}
                  />
                  <button type="button" onClick={addSkill}>
                    Add Skills
                  </button>
                </div>
                <div className="skillsBox">
                  {skills.length > 0 ? (
                    skills.map((element, key) => {
                      return (
                        <SkillBox
                          skill={element}
                          key={key}
                          skills={skills}
                          setSkills={setSkills}
                        />
                      );
                    })
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="formItem">
              <div>Duration of assessment</div>
              <div className="input">
                <div>
                  <input
                    type="text"
                    name="duration"
                    id="duration"
                    pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
                    placeholder="HH:MM:SS"
                    value={duration}
                    onChange={(e) => onChangeHandler(e, "duration")}
                  />
                </div>
              </div>
            </div>
            <div className="formItem">
              <div>Date of assessment</div>
              <div className="input">
                <div>
                  <input
                    type="text"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => onChangeHandler(e, "date")}
                    placeholder="mm-dd-yyyy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="formFooter">
            <div className="input">
              <button
                onClick={(e) => {
                  addAssessment(e);
                }}
                type="button"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
