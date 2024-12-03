// @ts-ignore
import React, { useState, useEffect } from 'react';
import './Home.css';
import { fetchAnnouncements, AnnouncementType, fetchUserLinks, UserLinksType } from '../../api';
import { useGlobalName } from '../../globalContext';

function Home() {
  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);
  const { globalName } = useGlobalName();

  useEffect(() => {
    const getAnnouncements = async () => {
      const data = await fetchAnnouncements();
      setAnnouncements(data);
    };

    getAnnouncements();
  }, []);

  return (
    <div className="footerAddition">
      <div className="home-page">
        <h1 className="site-title">Welcome {globalName || 'Guest'}!</h1>
        <h2 className="site-subtitle">RECENT ANNOUNCEMENTS:</h2>
        <div className="announcements-container">
          {announcements.map((announcement) => (
            <Announcement
              key={announcement.id}
              id={announcement.id}
              user_name={announcement.user_name}
              tag={announcement.tag}
              description={announcement.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

type AnnouncementProps = {
  id: number;
  user_name: string;
  tag: string;
  description: string;
};

function Announcement({ id, user_name, tag, description }: AnnouncementProps) {
  const [userLinks, setUserLinks] = useState<UserLinksType | null>(null); // Initialize with null

  useEffect(() => {
    const getUserLinks = async () => {
      try {
        const links = await fetchUserLinks(user_name); // Call the API with `user_name`
        setUserLinks(links); // Update state with the fetched links
      } catch (error) {
        console.error('Failed to fetch user links:', error);
      }
    };

    getUserLinks(); // Invoke the function inside `useEffect`
  }, [user_name]); // Add `user_name` to the dependency array to re-fetch when it changes

  return (
    <div className="announcement">
      <img className = "announcement_img" src={userLinks?.img_url} alt={useGlobalName() + "'s image"} />
      <div className="announcement-header">
        <h3>{`${user_name} ${tag}`}</h3>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
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
  );
};

export default Home;