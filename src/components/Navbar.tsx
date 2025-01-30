import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">JobSeek</Link>
      </div>

      <div className="hidden md:flex space-x-6">
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-600 text-lg font-medium"
        >
          Home
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {user && (
          <span className="hidden sm:inline text-gray-800 font-medium text-lg">
            {user.first_name}
          </span>
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
    </nav>
  );
};

export default Navbar;
