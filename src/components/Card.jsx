import React from "react";
import briefcase from "../assets/svgs/briefcase.svg";
import threedots from "../assets/svgs/threedots.svg";
import smallVerticalStrokes from "../assets/svgs/smallVerticalStroke.svg";
import calendar from "../assets/svgs/calendar.svg";
import linkIcon from "../assets/svgs/linkIcon.svg";
import Avatar from "react-avatar";

export default function Card({ cardDetails }) {
  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  const date = new Date(cardDetails.date).toLocaleDateString(
    "en-US",
    dateOptions
  );
  
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-top-items">
          <div className="card-icon">
            <img src={briefcase} alt="breifcase-icon" />
          </div>
          <div>
            <div className="mainCont-heading">{cardDetails.name}</div>
            <div className="card-date-info">
              <div className="card-text">{cardDetails.purpose}</div>
              <div className="smallVerticalStroke">
                <img src={smallVerticalStrokes} alt="stroke-icon" />
              </div>
              <div className="card-date">
                <div className="calendar-img">
                  <img src={calendar} alt="calendar-icon" />
                </div>
                <div className="card-date-text">{date}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="threeDots">
          <img src={threedots} alt="three-dots-icon" />
        </div>
      </div>
      <div className="more-card-info">
        <div className="card-sub-info">
          <div className="card-time-info">
            <div className="card-text">{cardDetails.duration}</div>
            <div className="card-sub-text">Duration</div>
          </div>
          <div className="card-quest-info">
            <div className="card-text">{cardDetails.numQuestions}</div>
            <div className="card-sub-text">Questions</div>
          </div>
        </div>
        <div className="card-share-info">
          <div className="card-share-btn">
            <div>
              <img src={linkIcon} alt="link-icon" />
            </div>
            <div>Share</div>
          </div>
          <div className="card-share-avatars">
            <Avatar
              className={`color${[Math.floor(Math.random() * 3)]}`}
              name="Larry Page"
              size="30"
              round={true}
            />
            <Avatar
              className={`color${[Math.floor(Math.random() * 3)]}`}
              name="Larry Page"
              size="30"
              round={true}
            />
            <Avatar
              className={`color${[Math.floor(Math.random() * 3)]}`}
              name="Larry Page"
              size="30"
              round={true}
            />
          </div>
          <div>{cardDetails.numParticapant}</div>
        </div>
      </div>
    </div>
  );
}
