import { auth } from "@/firebase/firebase";
import dayjs from "dayjs";
import { PropsWithChildren, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";

dayjs.extend(LocalizedFormat);

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [user] = useAuthState(auth);
  const hasDisplayedToast = useRef(false); // Using a ref to track whether the toast has been displayed

  useEffect(() => {
    if (!user && !hasDisplayedToast.current) {
      handlePageAccessMessage();
      hasDisplayedToast.current = true; // Marking the toast as displayed
    }
  }, [user]);

  const handlePageAccessMessage = () => {
    const toastMessage = "To access this page you must log in first.";

    toast.info(toastMessage, {
      description: `${dayjs().format("L LT")}`,
    });
  };

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
