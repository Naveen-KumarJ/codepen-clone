import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/loader/Loader";
export function ProtectedRoutes({ children }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return <Loader />;

  return user ? children : <Navigate to={"/"} />;
}
