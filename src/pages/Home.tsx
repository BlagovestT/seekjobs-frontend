import React, { useEffect, useState } from "react";
import { fetchJobs } from "../services/jobService";
import { Job } from "../types/job";
import JobCard from "../components/JobCard";

const HomePage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    loadJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800 py-12 px-6">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
        <div className="grid gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
