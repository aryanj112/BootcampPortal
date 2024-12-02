// @ts-ignore
import React from 'react'
import { announcementsData } from '../../data/announcements';
import './Home.css';
import { getGlobalName } from '../../globalState';  // Import functions from the global state
import { useGlobalName } from '../../globalContext';

function Home() {
  
  const { globalName } = useGlobalName();  // Get the global name

  return (
    <div className = "home-page">
      <h1> Welcome {globalName ? globalName : 'Guest'} !</h1>
      <h2> Recent Announcements: </h2>
      <div className = "announcements-container">
        {
          announcementsData.map(announcement => (
            <Announcement
              author = {announcement.author}
              tag = {announcement.tag}
              description = {announcement.description}
              imgUrl = {announcement.imgUrl}
            />
          ))
        }
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
        <img className = "annoucement-img" src={imgUrl} alt={"Image of " + author} />
        <h3> {author + ' ' + tag}</h3>
        <h4> {description}</h4>
      </div>
    )
}

export default Home