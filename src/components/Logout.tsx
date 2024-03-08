import { auth } from "@/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import Loader from "./Loader";
import { handleLogoutMessage } from "@/toasts/toastMessages";

const Logout = () => {
  const [signOut, loading] = useSignOut(auth);
  const handleLogout = () => {
    signOut();
    handleLogoutMessage();
  };
  return <p onClick={handleLogout}>{loading ? <Loader /> : "Log Out"}</p>;
};

export default Logout;
