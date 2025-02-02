import React from "react";
import { CircleUser } from "lucide-react";

interface UserCardProps {
  first_name: string;
  last_name: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({
  first_name,
  last_name,
  email,
}) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <div className="flex items-center space-x-4">
        <CircleUser className="text-blue-400 " />
        <div>
          <h2 className="text-xl font-semibold">
            {first_name} {last_name}
          </h2>
          <p className="text-gray-400">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
