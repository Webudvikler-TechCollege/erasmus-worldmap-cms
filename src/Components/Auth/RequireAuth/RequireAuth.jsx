import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Providers/AuthProvider";
import { LoginForm } from "../LoginForm/LoginForm";

export const RequireAuth = () => {
  const { loginData } = useAuth();

  if (loginData === null) {
    return <LoginForm />;
  }

  return <Outlet />;
};
