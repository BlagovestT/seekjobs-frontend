import React from "react";
import { useUser } from "../context/userContext";
import UserCard from "../components/UserCard";
import JobCard from "../components/JobCard";

const UserProfile: React.FC = () => {
  const { user, userJobs } = useUser();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4 ">
      <UserCard
        first_name={user.first_name}
        last_name={user.last_name}
        email={user.email}
      />

      <h2 className="text-2xl font-bold mt-6">Your Posted Jobs</h2>
      {userJobs.length > 0 ? (
        <div className="grid gap-4">
          {userJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-2">You haven't posted any jobs yet.</p>
      )}
    </div>
  );
};

export default UserProfile;
