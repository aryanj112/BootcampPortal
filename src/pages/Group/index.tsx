import React from 'react';
import { profilesData } from '../../data/profiles.ts';
import './groupStyling.css';

function Group() {
  const mentors = profilesData.filter(profile => profile.status === 'Mentor');
  const students = profilesData.filter(profile => profile.status === 'Student');

  return (
    <>
      <div className="group-heading">
        <h1>Group Profiles</h1>
      </div>
      <h2 className="section-heading">Mentors</h2>
      <ProfileList profiles={mentors} />
      <h2 className="section-heading">Teammates</h2>
      <ProfileList profiles={students} />
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
