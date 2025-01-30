import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-2xl font-bold text-blue-400">
          <Link to="/">JobSeek</Link>
        </div>

        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} JobSeek. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
