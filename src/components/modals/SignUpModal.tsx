import { useState } from "react";
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
import { toast } from "sonner";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
import { auth } from "@/firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

dayjs.extend(LocalizedFormat);

const handleAccountSuccesfulCreation = () => {
  const toastMessage = "Account has been created.";

  toast(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleErrorMessage = () => {
  const toastMessage = "Error during signup";

  toast(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

type SignUpProps = {};

const SignUpModal: React.FC<SignUpProps> = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password, passwordConfirm } = inputs;

    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(email, password);

      if (newUser) {
        handleAccountSuccesfulCreation();
      }
    } catch (error: any) {
      handleErrorMessage();
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <Card className="w-[350px]">
        <CardHeader className="bg-[#48a2d7] text-center">
          <CardTitle className="text-2xl text-white">Sign Up</CardTitle>
          <CardDescription className="text-white">
            To unlock additional cool stuff
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
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
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="passwordConfirm">Password Confirmation</Label>
              <Input
                onChange={handleChangeInput}
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="Password Confirm"
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-center gap-3">
          <Button
            type="submit"
            className="w-full bg-[#48a2d7] hover:bg-[#367ba3]"
          >
            Sign Up
          </Button>
          <p>
            Already have an account?{" "}
            <span className="cursor-pointer text-pink-500 hover:text-pink-700">
              Log in
            </span>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
};

export default SignUpModal;
