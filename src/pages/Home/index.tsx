// @ts-ignore
import React, { useState, useEffect } from 'react';
import './Home.css';
import { fetchAnnouncements, AnnouncementType } from '../../api';
import { useGlobalName } from '../../globalContext';

const Home: React.FC = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { globalName } = useGlobalName(); // Using the globalName from context

  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const data = await fetchAnnouncements(); // Fetch announcements from the API
        setAnnouncements(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getAnnouncements();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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

const Announcement: React.FC<AnnouncementProps> = ({
  user_name,
  tag,
  description,
}) => {
  return (
    <div className="announcement">
      <div className="announcement-header">
        <h3>{`${user_name} ${tag}`}</h3>
      </div>
      <h4>{description}</h4>
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