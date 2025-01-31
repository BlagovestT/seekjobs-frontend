import axios from "axios";
import { Job } from "../types/job";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const res = await axios.get<Job[]>(`${API_BASE_URL}/api/jobs`);
    return res.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};
