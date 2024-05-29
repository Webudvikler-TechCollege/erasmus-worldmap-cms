import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";

export const RequireAuth = () => {
  const { loginData } = useAuth();
  const navigate = useNavigate();

  if (loginData === null) {
    return <div>Loading...</div>;
  }

  if (!loginData.access_token) {
    navigate('/');
    return null;
  }

  return <Outlet />;
};
