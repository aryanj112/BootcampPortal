const BASE_URL = "http://localhost:8000"; // Replace with your FastAPI server URL

// Define the shape of an Announcement object
export interface AnnouncementType {
  id: number;
  user_name: string;
  tag: string;
  description: string;
}

export const fetchAnnouncements = async (): Promise<AnnouncementType[]> => {
  try {
    const response = await fetch(`${BASE_URL}/announcements`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch announcements:", error);
    throw error;
  }
};

export interface UserLinksType {
  id: number;
  img_url: string;
  linkdin_url: string;
  github_url: string;
  website_url?: string;  // Optional field
  resume_url?: string;  // Optional field
}

export const fetchUserLinks = async (name: string): Promise<UserLinksType> => {
  try {
    const response = await fetch(`${BASE_URL}/links?name=${name}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user links');
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch user links for ${name}:`, error);
    throw error;
  }
};

// Define the interface for a User
export interface User {
  id: number;
  role: string;
  linkdinURL: string;
  websiteURL: string | null;
  name: string;
  password: string;
  imgURL: string;
  githubURL: string;
  resumeURL: string | null;
}

// Function to fetch mentors
export const fetchMentors = async (name: string): Promise<User[]> => {
  try {
    const response = await fetch(`${BASE_URL}/mentors?name=${name}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);  // Logging the data for debugging
    return data;
  } catch (error) {
    console.error("Failed to fetch mentors:", error);
    throw error;
  }
};

// Function to fetch mentees
export const fetchMentees = async (name: string): Promise<User[]> => {
  try {
    const response = await fetch(`${BASE_URL}/mentees?name=${name}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch mentees:", error);
    throw error;
  }
};

// Function to fetch teammates
export const fetchTeammates = async (name: string): Promise<User[]> => {
  try {
    const response = await fetch(`${BASE_URL}/teammates?name=${name}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch teammates:", error);
    throw error;
  }
};