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

export const fetchUserImg = async (name: string): Promise<string> => {
    const response = await fetch(`${BASE_URL}/links?name=${name}`);
    return response.text();
};