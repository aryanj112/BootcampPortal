// src/utils/api.ts
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
    return await response.json(); // TypeScript infers the return type from Promise<Announcement[]>
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
    website_url?: string; // Optional field
    resume_url?: string;  // Optional field
}

export const fetchUserLinks = async (name: string): Promise<UserLinksType> => {
    const response = await fetch(`${BASE_URL}/links?name=${name}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user links');
    }
    
    return response.json(); // Parse and return the JSON response
};

// Function to fetch mentors
export const fetchMentors = async (name: string): Promise<string[]> => {
    try {
      const response = await fetch(`${BASE_URL}/mentors?name=${name}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Assuming the response is an array of mentor names
    } catch (error) {
      console.error("Failed to fetch mentors:", error);
      throw error;
    }
  };
  
  // Function to fetch mentees
  export const fetchMentees = async (name: string): Promise<string[]> => {
    try {
      const response = await fetch(`${BASE_URL}/mentees?name=${name}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Assuming the response is an array of mentee names
    } catch (error) {
      console.error("Failed to fetch mentees:", error);
      throw error;
    }
  };
  
  // Function to fetch students
  export const fetchStudents = async (name: string): Promise<string[]> => {
    try {
      const response = await fetch(`${BASE_URL}/students?name=${name}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Assuming the response is an array of student names
    } catch (error) {
      console.error("Failed to fetch students:", error);
      throw error;
    }
  };
  
  // Function to fetch teacher
  export const fetchTeacher = async (name: string): Promise<string> => {
    try {
      const response = await fetch(`${BASE_URL}/teacher?name=${name}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Assuming the response is a single string (the teacher's name)
    } catch (error) {
      console.error("Failed to fetch teacher:", error);
      throw error;
    }
  };
  
  // Function to fetch teammates
  export const fetchTeammates = async (name: string): Promise<string[]> => {
    try {
      const response = await fetch(`${BASE_URL}/teammates?name=${name}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // Assuming the response is an array of teammate names
    } catch (error) {
      console.error("Failed to fetch teammates:", error);
      throw error;
    }
  };