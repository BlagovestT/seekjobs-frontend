import React from "react";
import { Briefcase, MapPin, Calendar, List, Clock } from "lucide-react";

interface JobProps {
  job: {
    id: number;
    title: string;
    description: string;
    location: string;
    employment_type: string;
    min_experience: number;
    keywords: string;
    created_at: string;
  };
}

const JobCard: React.FC<JobProps> = ({ job }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
      <div className="flex flex-wrap gap-4 text-gray-600 mt-3 text-sm">
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-blue-600" />
          {job.location}
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={18} className="text-green-600" />
          {job.employment_type}
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-purple-600" />
          {job.min_experience} years experience
        </div>
        <div className="flex items-center gap-2">
          <List size={18} className="text-yellow-600" />
          {job.keywords}
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-red-600" />
          {new Date(job.created_at).toLocaleDateString()}
        </div>
      </div>
      <p className="mt-4 text-gray-700 text-sm">{job.description}</p>
      {/* //TODO: Add Edit button when is in the user profile */}
      <button className="mt-4 w-70 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
        Enroll Now
      </button>
    </div>
  );
};

export default JobCard;
