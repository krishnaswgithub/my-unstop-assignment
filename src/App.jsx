import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import MainComponent from "./components/MainComponent";
import SideBar from "./components/SideBar";
import BlankPage from "./pages/BlankPage";
import AssessmentsPage from "./pages/AssessmentsPage";
import { Toaster } from "react-hot-toast";
import "./styles/style.css";

function App() {
  const [form, setForm] = useState(false);
  const [assessment, setAssessment] = useState([
    {
      name: "Math Assessment",
      purpose: "Job",
      skills: ["ReactJS, NodeJS, MongoDB, ExpressJS"],
      date: "04-20-2023",
      numQuestions: "00",
      duration: "00",
      numParticapant: "",
    },
    {
      name: "Math Assessment",
      purpose: "Job",
      skills: ["ReactJS, NodeJS, MongoDB, ExpressJS"],
      date: "04-20-2023",
      numQuestions: "10",
      duration: "01:30:00",
      numParticapant: "+324",
    },
    {
      name: "Math Assessment",
      purpose: "Job",
      skills: ["ReactJS, NodeJS, MongoDB, ExpressJS"],
      date: "04-20-2023",
      numQuestions: "10",
      duration: "01:30:00",
      numParticapant: "+324",
    },
    {
      name: "Math Assessment",
      purpose: "Job",
      skills: ["ReactJS, NodeJS, MongoDB, ExpressJS"],
      date: "04-20-2023",
      numQuestions: "10",
      duration: "01:30:00",
      numParticapant: "+324",
    },
    {
      name: "Math Assessment",
      purpose: "Job",
      skills: ["ReactJS, NodeJS, MongoDB, ExpressJS"],
      date: "04-20-2023",
      numQuestions: "10",
      duration: "01:30:00",
      numParticapant: "+32,4090",
    },
  ]);

  const [showSideBar, setShowSideBar] = useState(false);
  const [showStats, setShowStats] = useState(false);

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ className: "toast-text" }}
      />
      <div className={`main ${form || showSideBar ? "hideOverflow" : ""}`}>
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainComponent
                showSideBar={showSideBar}
                setShowSideBar={setShowSideBar}
              />
            }
          >
            <Route
              path=""
              element={
                <AssessmentsPage
                  form={form}
                  setForm={setForm}
                  assessment={assessment}
                  showStats={showStats}
                  setShowStats={setShowStats}
                />
              }
            />
            <Route path="*" element={<BlankPage />} />
          </Route>
        </Routes>
        {form ? (
          <Form
            form={form}
            setForm={setForm}
            assessment={assessment}
            setAssessment={setAssessment}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
