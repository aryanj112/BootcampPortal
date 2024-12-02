// @ts-ignore
import React from 'react'
import { announcementsData } from '../../data/announcements';
import './Home.css';
import { useGlobalName } from '../../globalContext';

function Home() {
  const { globalName } = useGlobalName();  // Get the global name

  return (
    <div className="footerAddition">
      <div className = "home-page">
        <h1 className = "site-title"> Welcome {globalName ? globalName : 'Guest'} !</h1>
        <h2 className = "site-subtitle"> RECENT ANNOUNCEMENTS: </h2>
        <div className = "announcements-container">
          {
            announcementsData.map(announcement => (
              <div className = "announcement-text">
              <Announcement
                  author = {announcement.author}
                  tag = {announcement.tag}
                  description = {announcement.description}
                imgUrl = {announcement.imgUrl}
              />
              </div>
            ))
          }
        </div>
      </div>
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
  )
}

type AnnounceProps = {
  author: string;
  tag: string; 
  description: string;
  imgUrl: string;
}

function Announcement({author, tag, description, imgUrl}: AnnounceProps){
    return(
      <div className = "annoucement">
        <div className= "announcement-header">
        <img className = "annoucement-img" src={imgUrl} alt={"Image of " + author} />
        <h3> {author + ' ' + tag}</h3>
        </div>
        <h4> {description}</h4>
      </div>
    )
}

export default Home