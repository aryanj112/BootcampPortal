// @ts-ignore
import React from 'react';
import './Profile.css';

type ProfileProps = {
  name: string;
  status: string;
  imgURL: string;
  linkedinURL: string;
  gitHubURL: string;
  websiteURL: string;
  resumeURL: string;
};

function Profile({ name, status, imgURL, linkedinURL, gitHubURL, websiteURL, resumeURL}: ProfileProps) {
  return (
    <div className="profile">
      <img className="profileImage" src={imgURL} alt={name} />
      <h2 className="name">
        {name} <h4>{status}</h4>
      </h2>
      <ul className="links">
        <li>{'Linkedin Link: ' + linkedinURL}</li>
        <li>{'GitHub Link: ' + gitHubURL}</li>
        <li>{'Website Link: ' + websiteURL}</li>
      </ul>
      <iframe className="resume" src={resumeURL} width="600" height="500" />
    </div>
  );
}

export default Profile;