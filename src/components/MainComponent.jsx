import navigationBar from "../assets/svgs/navigation.svg";
import desktopIcon from "../assets/svgs/desktopIcon.svg";
import mobile from "../assets/svgs/mobile.svg";
import verticalStroke from "../assets/svgs/verticalStroke.svg";
import { NavLink, Outlet } from "react-router-dom";

import React from "react";

export default function MainComponent({ showSideBar, setShowSideBar }) {
  function showSideBarHandler() {
    if (showSideBar) {
      setShowSideBar(false);
    } else {
      setShowSideBar(true);
    }
  }
  return (
    <div className="mainCont">
      <div className="topBar">
        <div className="topBar-heading">
          <div className="hamburger-logo" onClick={() => showSideBarHandler()}>
            <img src={navigationBar} alt="hamburger-icon" />
          </div>
          <div>Assessment</div>
        </div>
        <div className="verticalStroke">
          <img src={verticalStroke} alt="stroke-icon" />
        </div>
        <div className="topBar-subheading">
          <div className="topBar-subheadingList laptop">
            <div className="subheading" id="my-assessment">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "selected-subheading" : ""
                }
              >
                My Assessments
              </NavLink>
            </div>
          </div>
          <div>
            <img src={mobile} className="mobileIcon" alt="mobile-icon" />
            <img src={desktopIcon} className="desktopIcon" alt="desktop-icon" />
          </div>
        </div>
      </div>
      <div className="topBar-subheadingList mobile">
        <div className="subheading">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "selected-subheading" : ""
            }
          >
            My Assessments
          </NavLink>
        </div>
        <div className="subheading">
          <NavLink
            to="/unstopassessments"
            className={({ isActive, isPending }) =>
              isActive ? "selected-subheading" : ""
            }
          >
            Unstop Assessments
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
