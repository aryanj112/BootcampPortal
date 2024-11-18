import React from 'react'
import { profilesData } from '../data/profiles.ts'

function Group() {
  return (
    <div className = "profiles">
        {
            profilesData.map(profile => (
                <Profile 
                    name = {profile.name}
                    status = {profile.status}
                    imgURL = {profile.imgURL} 
                    linkedinURL = {profile.linkedinURL} 
                    gitHubURL = {profile.gitHubURL}
                    websiteURL = {profile.websiteURL} 
                    resumeURL = {profile.resumeURL}               
                />
            ))
        }
    </div>
  )
}

type ProfileProps = {
    name: string;
    status: string;
    imgURL: string;
    linkedinURL: string;
    gitHubURL: string;
    websiteURL: string;
    resumeURL: string;
};

function Profile({name, status, imgURL, linkedinURL, gitHubURL, websiteURL, resumeURL}: ProfileProps){
    return(
        <div>
            <img src= { imgURL } alt="" />
            <h2> { name } <h4> { status } </h4> </h2>
            <ul className = "group-links">
                <li> {"Linkedin Link: " + linkedinURL} </li>
                <li> {"GitHub Link: " + gitHubURL} </li>
                <li> {"Website Link: " + websiteURL} </li>
            </ul>
            <iframe src= { resumeURL } width="600" height="500"></iframe>
        </div>

    )
}

export default Group