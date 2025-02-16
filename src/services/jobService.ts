import axios from "axios";
import { Job } from "../types/job";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//Get all jobs
export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const res = await axios.get<Job[]>(`${API_BASE_URL}/api/jobs`);
    return res.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

//TODO: Implement the functionality for editing a job

//TODO: Implement the functionality for creating a job

//TODO: Implement the functionality for deleting a job
