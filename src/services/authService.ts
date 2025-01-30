import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
  token: string;
}

export const registerUser = async (data: RegisterData) => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/register`, data);
  return response.data;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  return response.json();
};

// Get the logged-in user's info using the token
export const getUserInfo = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const response = await axios.get(`${API_BASE_URL}/api/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

// Logout functionality
export const logoutUser = () => {
  localStorage.removeItem("token");
};
