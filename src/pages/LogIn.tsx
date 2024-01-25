import LoginModal from "@/components/modals/LoginModal";
import SignUpModal from "@/components/modals/SignUpModal";

const Login = () => {
  return (
    <div className="flex h-screen gap-2">
      <SignUpModal />
      <LoginModal />
    </div>
  );
};

export default Login;
