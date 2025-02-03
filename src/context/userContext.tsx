import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchUserProfile, fetchUserJobs } from "../services/userService";
import { useAuth } from "./authContext";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface Job {
  id: number;
  user_id: string;
  title: string;
  description: string;
  location: string;
  employment_type: string;
  min_experience: number;
  keywords: string;
  created_at: string;
  updated_at: string;
}

interface UserContextType {
  user: User | null;
  userJobs: Job[];
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [userJobs, setUserJobs] = useState<Job[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        const userData = await fetchUserProfile(token);
        setUser(userData);
      }
    };
    loadUser();
  }, [token]);

  useEffect(() => {
    const loadUserJobs = async () => {
      if (user?.id) {
        const jobs = await fetchUserJobs(user.id);
        setUserJobs(jobs);
      }
    };
    loadUserJobs();
  }, [user?.id]);

  return (
    <UserContext.Provider value={{ user, userJobs, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
