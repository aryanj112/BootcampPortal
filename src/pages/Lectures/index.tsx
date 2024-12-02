import React from 'react';
import { homeworkData } from '../../data/HomeworkData.ts';
import '../Homework/homeworkStyling.css';

function Lectures() {
  return (
    <>
      <div className="footerAddition">
        <div className="homework-heading">
          <h1>HOMEWORK ASSIGNMENTS</h1>
        </div>
        <HomeworkList />
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

const transformDescription = (description: string) => {
  const formattedDescription = description.replace(/\n/g, '<br />');

  const urlRegex = /(https?:\/\/[^\s]+)/g;  
  return formattedDescription.split(urlRegex).map((part, index) => 
    urlRegex.test(part) ? (
      <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="homework-link">
        {part}
      </a>
    ) : (
      <span key={index} dangerouslySetInnerHTML={{ __html: part }} />
    )
  );
};

const HomeworkCard: React.FC<{ homework: typeof homeworkData[0] }> = ({ homework }) => (
  <div className="homework-card">
    <div className="homework-content">
      <div className="homework-text">
        <h2>{homework.name}</h2>
        <p>Due Date: {homework.dueDate}<br />(11:59 PM)</p>
        {homework.githubLink !== "" && (
          <a
            href={homework.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="homework-link"
          >
            GitHub Repository<br /><br />
          </a>
        )}
        <a
          href={homework.submissionPortal}
          target="_blank"
          rel="noopener noreferrer"
          className="homework-link"
        >
          Submission Portal
        </a>
      </div>
      <div className="homework-description">
        <p>
          <b>Description:</b>
          <br /> <br /> {transformDescription(homework.description)}
        </p>
      </div>
      <div className="homework-images">
        {homework.images.map((img, index) => (
          <a
            key={index}
            href={img} 
            target="_blank"
            rel="noopener noreferrer"
            className="homework-image-button"
          >
            <img
              src={img}
              alt={`Homework ${homework.id} Image ${index + 1}`}
            />
          </a>
        ))}
      </div>
    </div>
  </div>
);

const HomeworkList: React.FC = () => {
  return (
    <div className="homework-list-container">
      {homeworkData.map(hw => (
        <HomeworkCard key={hw.id} homework={hw} />
      ))}
    </div>
  );
};

export default Lectures;