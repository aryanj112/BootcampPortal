// @ts-ignore
import React from 'react';
import { profilesData } from '../../data/profiles';
import Profile from './Profile';

function Group() {
  return (
    <div className="profiles">
      {profilesData.map((profile) => (
        <Profile
          key={profile.id}
          name={profile.name}
          status={profile.status}
          imgURL={profile.imgURL}
          linkedinURL={profile.linkedinURL}
          gitHubURL={profile.gitHubURL}
          websiteURL={profile.websiteURL}
          resumeURL={profile.resumeURL}
        />
      ))}
    </div>
  );
}

export default Group;