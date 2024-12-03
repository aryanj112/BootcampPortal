import React, { useState, useEffect } from 'react';
import './groupStyling.css';
import "../../components/NavBar/footer.css";
import { fetchMentors, fetchMentees, fetchTeammates, fetchUserLinks } from '../../api';
import { useGlobalName } from '../../globalContext';


function Group() {

  const { globalName } =  useGlobalName();
  const [mentors, setMentors] = useState<any[]>([]); // Mentors data from the API
  const [mentees, setMentees] = useState<any[]>([]); // Mentees data from the API
  const [teammates, setTeammates] = useState<any[]>([]); // Teammates data from the API

  useEffect(() => {
    // Fetch Mentors
    const fetchMentorData = async () => {
      const fetchedMentors = await fetchMentors(globalName); // Replace with dynamic name
      if (fetchedMentors.length > 0) {
        setMentors(fetchedMentors); // Only update if the response is not empty
      }
    };
  
    // Fetch Mentees
    const fetchMenteeData = async () => {
      const fetchedMentees = await fetchMentees(globalName); // Replace with dynamic name
      if (fetchedMentees.length > 0) {
        setMentees(fetchedMentees); // Only update if the response is not empty
      }
    };
  
    // Fetch Teammates
    const fetchTeammateData = async () => {
      const fetchedTeammates = await fetchTeammates(globalName); // Replace with dynamic name
      if (fetchedTeammates.length > 0) {
        setTeammates(fetchedTeammates); // Only update if the response is not empty
      }
    };
  
    if (globalName) {
      fetchMentorData();
      fetchMenteeData();
      fetchTeammateData();
    }
  }, [globalName]);  // Add globalName to the dependency array

  return (
    <>
      <div className="footerAddition">
        <div className="group-heading">
          <h1>Group Profiles</h1>
        </div>
        
        {mentors.length > 0 && (
          <>
            <h1 className="section-heading">Mentors</h1>
            <ProfileList names={mentors} />
          </>
        )}
        
        {mentees.length > 0 && (
          <>
            <h1 className="section-heading">Mentees</h1>
            <ProfileList names={mentees} />
          </>
        )}

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

interface ProfileCardProps {
  userName: string;
}

function ProfileCard({ userName }: ProfileCardProps) {

  const [profileData, setProfileData] = useState<any | null>(null); // Adjust to correct type

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await fetchUserLinks(userName); // Fetch data based on userName
        setProfileData(data);
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      }
    };

    fetchProfileData();
  }, [userName]);

  return (
    <div className="profile-card">
      <div className="profile-content">
        <div className="profile-info">
          <div className="profile-image">
            <img src={profileData.img_url} alt={`${profileData.name}'s profile`} />
          </div>
          <h1 className="profile-name">{profileData.name}</h1>
          <div className="profile-links">
            <div className="sub-profile-links">
              {profileData.resume_url && (
                <a href={profileData.resume_url} target="_blank" rel="noopener noreferrer" className="profile-link">
                  Resume
                </a>
              )}
              {profileData.linkdin_url && (
                <a href={profileData.linkdin_url} target="_blank" rel="noopener noreferrer" className="profile-link">
                  LinkedIn
                </a>
              )}
            </div>
            <div className="sub-profile-links">
              {profileData.github_url && (
                <a href={profileData.github_url} target="_blank" rel="noopener noreferrer" className="profile-link">
                  GitHub
                </a>
              )}
              {profileData.website_url && (
                <a href={profileData.website_url} target="_blank" rel="noopener noreferrer" className="profile-link">
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

function ProfileList({ names }: { names: string[] }) {
  return (
    <div className="profile-list-container">
      {names.map(name => (
        <ProfileCard key={name} userName={name} />
      ))}
    </div>
  );
}

export default Group;