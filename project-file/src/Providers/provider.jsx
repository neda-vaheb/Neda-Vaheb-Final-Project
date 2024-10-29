import { Navigate } from "react-router-dom";
import { getCookie } from "../utiles/cookie";

function AuthProvider({ children }) {
  const token = getCookie("token");
  console.log("start")
  if (!token) return <Navigate to="/register" />

  return children;
}

export default AuthProvider;