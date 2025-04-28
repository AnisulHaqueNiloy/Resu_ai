import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;

  return isSignedIn ? children : <Navigate to="/auth/sign-in" />;
};

export default PrivateRoute;
