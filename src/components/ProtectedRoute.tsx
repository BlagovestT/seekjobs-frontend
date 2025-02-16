import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return element;
};

export default ProtectedRoute;
