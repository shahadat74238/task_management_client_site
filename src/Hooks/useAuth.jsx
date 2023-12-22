import { useContext } from "react";
import { AuthContext } from "../Utils/Provider/AuthProvider";


const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
