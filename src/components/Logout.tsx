import { auth } from "@/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import Loader from "./Loader";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
import { toast } from "sonner";
dayjs.extend(LocalizedFormat);
const handleLogoutMessage = () => {
  const toastMessage = "You have been successfully logged out.";

  toast.success(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const Logout = () => {
  const [signOut, loading] = useSignOut(auth);
  const handleLogout = () => {
    signOut();
    handleLogoutMessage();
  };
  return <p onClick={handleLogout}>{loading ? <Loader /> : "Log Out"}</p>;
};

export default Logout;
