import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { CircleUser } from "lucide-react";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-400">
          <Link to="/">JobSeek</Link>
        </div>

        <div className="flex items-center space-x-10">
          {user && (
            <Link
              to="/profile"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 font-medium text-lg transition duration-200"
            >
              <CircleUser className="text-xl" />
              <span>{user.first_name}</span>
            </Link>
          )}
          {user ? (
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
