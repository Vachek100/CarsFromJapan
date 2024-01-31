import AuthModal from "@/components/modals/AuthModal";
import LoginModal from "@/components/modals/LoginModal";
import SignUpModal from "@/components/modals/SignUpModal";

const Login = () => {
  return (
    <div className="h-full w-full flex gap-2">
      <AuthModal />
    </div>
  );
};

export default Login;
