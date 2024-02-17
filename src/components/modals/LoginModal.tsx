import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebase/firebase";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

import { toast } from "sonner";
import Loader from "../Loader";

dayjs.extend(LocalizedFormat);

type LoginProps = {};

const handleEmptyFieldErrorMessage = () => {
  const toastMessage = "Please fill all fields.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleErrorMessage = () => {
  const toastMessage = "Error during login";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleSuccessfulLoginMessage = () => {
  const toastMessage = "You have successfully logged in.";

  toast.success(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleLoginErrorMessage = () => {
  const toastMessage = "Wrong email or password. Try again.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const LoginModal: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password)
      return handleEmptyFieldErrorMessage();

    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password,
      );
      if (!newUser) return;
      handleSuccessfulLoginMessage();
    } catch (error: any) {
      handleErrorMessage();
    }
  };

  useEffect(() => {
    if (error) handleLoginErrorMessage();
  }, [error]);

  return (
    <form onSubmit={handleLogin}>
      <Card className="w-[350px]">
        <CardHeader className="rounded-t-md bg-[#0b305e] text-center">
          <CardTitle className="text-2xl text-white">Log In</CardTitle>
          <CardDescription className="text-white">
            To access your profile
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2 pt-6">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={handleChangeInput}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  onChange={handleChangeInput}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <p
          onClick={() => handleClick("forgotPassword")}
          className="cursor-pointer px-6 text-sm text-[#e95759] hover:text-[#b54345]"
        >
          Forgot password?
        </p>
        <CardFooter className="flex flex-col justify-center gap-3 py-6">
          <Button className="w-full bg-[#0b305e] hover:bg-[#1357aa]">
            {loading ? <Loader /> : "Log In"}
          </Button>
          <p>
            Don't have an account yet?{" "}
            <span
              onClick={() => handleClick("register")}
              className="cursor-pointer text-[#e95759] hover:text-[#b54345]"
            >
              Sign Up
            </span>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
};

export default LoginModal;
