import { useEffect, useState } from "react";
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
import Loader from "@/components/Loader";

dayjs.extend(LocalizedFormat);

const handleAccountSuccessfulCreation = () => {
  const toastMessage = "Account has been created.";

  toast.success(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleErrorMessage = () => {
  const toastMessage = "Error during signup";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handlePasswordLengthMessage = () => {
  const toastMessage = "Password should be at least 6 characters long.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handlePasswordMatchMessage = () => {
  const toastMessage = "Passwords do not match.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleEmailAlreadyInUseMessage = () => {
  const toastMessage = "Email already in use.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

const handleEmptyFieldErrorMessage = () => {
  const toastMessage = "Please fill all fields.";

  toast.error(toastMessage, {
    description: `${dayjs().format("L LT")}`,
  });
};

type SignUpProps = {};

const SignUpModal: React.FC<SignUpProps> = () => {
  const [inputs, setInputs] = useState({
    displayName: "",
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

    if (
      !inputs.displayName ||
      !inputs.email ||
      !inputs.password ||
      !inputs.passwordConfirm
    )
      return handleEmptyFieldErrorMessage();

    if (inputs.password.length < 6) {
      handlePasswordLengthMessage();
      return;
    }

    if (inputs.password !== inputs.passwordConfirm) {
      handlePasswordMatchMessage();
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password,
      );

      if (newUser) {
        handleAccountSuccessfulCreation();
      }
    } catch (error: any) {
      handleErrorMessage();
    }
  };

  useEffect(() => {
    if (error) handleEmailAlreadyInUseMessage();
  }, [error]);

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
              <Label htmlFor="displayName">Name</Label>
              <Input
                onChange={handleChangeInput}
                type="displayName"
                name="displayName"
                id="displayName"
                placeholder="Name"
                required
              />
            </div>
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
            {/*
          //TODO add loader(spinner)
          */}
            {loading ? <Loader /> : "Sign Up"}
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
