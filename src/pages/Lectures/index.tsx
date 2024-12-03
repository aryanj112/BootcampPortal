import React from 'react';
import { lectureData } from '../../data/LectureInfo.ts';
import './Lectures.css';

function Lectures() {
  return (
    <>
      <div className="footerAddition">
        <div className="lecture-heading">
          <h1>LECTURES</h1>
        </div>
        <LectureList />
        <br /><br />
        <div className="footer">
          <div className="footer-section">
            <h2>CONTACT INFORMATION</h2>
            <h3>KIMBER: martinezkimber03@gmail.com</h3>
            <h3>EVELYN: ejiang2@terpmail.umd.edu</h3>
          </div>
          <div className="footer-section">
            <h2>CLASS DETAILS</h2>
            <h3>TIME: Tues 7:00 - 8:00 PM</h3>
            <h3>LOCATION: CSI 1121</h3>
          </div>
        </div>
      </div>
    </>
  );
}

const LectureCard: React.FC<{ lecture: typeof lectureData[0] }> = ({ lecture }) => (
  <div className="lecture-card">
    <div className="lecture-content">
      <p><b>Date:</b> {lecture.date}</p>
      <br />
      <div className="lectureLinks">
        <a href={lecture.zoomLink} target="_blank" rel="noopener noreferrer" className="lecture-link">
          Zoom Link
        </a>
        {lecture.GitHubLink && (
          <a href={lecture.GitHubLink} target="_blank" rel="noopener noreferrer" className="lecture-link">
            GitHub Link
          </a>
        )}
        <a href={lecture.slidesLink} target="_blank" rel="noopener noreferrer" className="lecture-link">
          Slides Link
        </a>
      </div>
    </div>
  </div>
);

const LectureList: React.FC = () => {
  return (
    <div className="lecture-list-container">
      {lectureData.map((lecture) => (
        <LectureCard key={lecture.id} lecture={lecture} />
      ))}
    </div>
  );
};

export default Lectures;