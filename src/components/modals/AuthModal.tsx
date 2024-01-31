import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { authModalState } from "@/atoms/authModalAtom";
import { useRecoilValue } from "recoil";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import ResetPasswordModal from "./ResetPasswordModal";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const authModal = useRecoilValue(authModalState);
  return (
    <Dialog>
      <DialogTrigger>LogIn / SignUp</DialogTrigger>
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
