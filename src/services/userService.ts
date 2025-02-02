import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchUserProfile = async (token: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export const fetchUserJobs = async (userId: string) => {
  try {
    const response = await axios.get("/api/jobs");
    const allJobs = response.data;

    /// TODO: Fix the logic
    const userJobs = allJobs.filter((job: any) => job.user_id === userId);

    return userJobs;
  } catch (error) {
    console.error("Error fetching user jobs:", error);
    return [];
  }
};
