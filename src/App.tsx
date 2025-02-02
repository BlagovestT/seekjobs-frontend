import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/authContext";
import { UserProvider } from "./context/userContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/job/:id" element={<JobDetails />} />
                <Route path="/profile" element={<UserProfile />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
