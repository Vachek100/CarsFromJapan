import { auth } from "@/firebase/firebase";
import * as dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";


const ProtectedRoute = () => {
    const [user] = useAuthState(auth);
    const hasDisplayedToast = useRef(false);

    useEffect(() => {
        if (!user && !hasDisplayedToast.current) {
            handlePageAccessMessage();
            hasDisplayedToast.current = true;
        }
    }, [user]);

    const handlePageAccessMessage = () => {
        const toastMessage = "To access this page you must log in first.";

        toast.info(toastMessage, {
            description: `${dayjs().format("L LT")}`,
        });
    };

    return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
