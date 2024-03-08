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
import { auth, firestore } from "@/firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loader from "@/components/Loader";
import { authModalState } from "@/atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import { doc, setDoc } from "firebase/firestore";
import {
  handleAccountSuccessfulCreation,
  handleEmailAlreadyInUseMessage,
  handleEmptyFieldErrorMessage,
  handlePasswordLengthMessage,
  handlePasswordMatchMessage,
  handleDuringSignUpErrorMessage,
} from "@/toasts/toastMessages";

type SignUpProps = {};

const SignUpModal: React.FC<SignUpProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };
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
      if (!newUser) return;

      const userData = {
        uid: newUser.user.uid,
        displayName: inputs.displayName,
        email: newUser.user.email,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        likedCars: [],
        publishedCars: [],
        profilePicture: "",
      };

      await setDoc(doc(firestore, "users", newUser.user.uid), userData);

      if (newUser) {
        handleAccountSuccessfulCreation();
      }
    } catch (error: any) {
      handleDuringSignUpErrorMessage();
    }
  };

  useEffect(() => {
    if (error) handleEmailAlreadyInUseMessage();
  }, [error]);

  return (
    <form onSubmit={handleRegister}>
      <Card className="w-[350px]">
        <CardHeader className="rounded-t-md bg-[#0b305e] text-center">
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
            className="w-full bg-[#0b305e] hover:bg-[#1357aa]"
          >
            {loading ? <Loader /> : "Sign Up"}
          </Button>
          <p>
            Already have an account?{" "}
            <span
              onClick={handleClick}
              className="cursor-pointer text-[#e95759] hover:text-[#b54345]"
            >
              Log in
            </span>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
};

export default SignUpModal;
