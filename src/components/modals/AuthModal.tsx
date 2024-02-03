import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { authModalState } from "@/atoms/authModalAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import ResetPasswordModal from "./ResetPasswordModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";

import Logout from "../Logout";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };
  const authModal = useRecoilValue(authModalState);
  const [user] = useAuthState(auth);

  if (user) return <Logout />;

  return (
    <Dialog>
      <DialogTrigger onClick={() => handleClick("login")}>Log In</DialogTrigger>
      <DialogContent>
        {authModal.type === "login" ? (
          <LoginModal />
        ) : authModal.type === "register" ? (
          <SignUpModal />
        ) : (
          <ResetPasswordModal />
        )}
      </DialogContent>
    </Dialog>
  );
};
export default AuthModal;
