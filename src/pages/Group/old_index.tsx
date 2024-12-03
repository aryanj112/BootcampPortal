import React from 'react';
import { profilesData } from '../../data/profiles.ts';
import './groupStyling.css';
import "../../components/NavBar/footer.css";

function Group() {
  const mentors = profilesData.filter(profile => profile.status === 'Mentor');
  const students = profilesData.filter(profile => profile.status === 'Student');

  

  return (
    <>
      <div className="footerAddition">
        <div className="group-heading">
          <h1>Group Profiles</h1>
        </div>
        <h1 className="section-heading">Mentors</h1>
        <ProfileList profiles={mentors} />
        <h1 className="section-heading">Teammates</h1>
        <ProfileList profiles={students} />
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

const ProfileCard: React.FC<{ profile: typeof profilesData[0] }> = ({ profile }) => (
  <div className="profile-card">
    <div className="profile-content">
      <div className="profile-info">
        <div className="profile-image">
          <img src={profile.imgURL} alt={`${profile.name}'s profile`} />
        </div>
        <h1 className="profile-name">{profile.name}</h1>
        <div className="profile-links">
          <div className="sub-profile-links">
            {profile.resumeURL && (
              <a href={profile.resumeURL} target="_blank" rel="noopener noreferrer" className="profile-link">
                Resume
              </a>
            )}
            {profile.linkedinURL && (
              <a href={profile.linkedinURL} target="_blank" rel="noopener noreferrer" className="profile-link">
                LinkedIn
              </a>
            )}
          </div>
          <div className="sub-profile-links">
            {profile.gitHubURL && (
              <a href={profile.gitHubURL} target="_blank" rel="noopener noreferrer" className="profile-link">
                GitHub
              </a>
            )}
            {profile.websiteURL && (
              <a href={profile.websiteURL} target="_blank" rel="noopener noreferrer" className="profile-link">
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProfileList: React.FC<{ profiles: typeof profilesData }> = ({ profiles }) => (
  <div className="profile-list-container">
    {profiles.map(profile => (
      <ProfileCard key={profile.id} profile={profile} />
    ))}
  </div>
);

export default Group;