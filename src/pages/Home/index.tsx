// @ts-ignore
import React from 'react'
import { announcementsData } from '../../data/announcements';
import './Home.css';

type HomeProps = {
  name: string;
};

function Home( {name}: HomeProps ) {
  return (
    <div className = "home-page">
      <h1 className = "site-title"> {"WELCOME, " + name + "!"}</h1>
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