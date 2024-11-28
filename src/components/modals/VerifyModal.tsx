import {
  auth,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "@/firebase/firebase";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { verifyModalState, isUserVerifiedState } from "@/atoms/verifyModalAtom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Loader from "../Loader";
import {
  errorVerifyMessage,
  successfullVerifyMessage,
} from "@/toasts/toastMessages";

const VerifyModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const setVerifyModalState = useSetRecoilState(verifyModalState);
  const setIsUserVerified = useSetRecoilState(isUserVerifiedState);

  const handleClick = async (type: "Verify" | "newPassword") => {
    setIsLoading(true);
    const user = auth.currentUser;

    if (user) {
      const credential = EmailAuthProvider.credential(
        user.email || "",
        password || "",
      );

      try {
        await reauthenticateWithCredential(user, credential);
        successfullVerifyMessage();
        setVerifyModalState((prev) => ({ ...prev, type }));
        setIsUserVerified(true);
      } catch (error) {
        errorVerifyMessage();
      }
    }

    setIsLoading(false);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader className="rounded-t-md bg-[#0b305e] text-center">
        <CardTitle className="text-2xl text-white">
          Verify your password
        </CardTitle>
        <CardDescription className="text-white">
          For security reasons, please enter your password before continuing.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2 pt-6">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-center gap-3 py-6">
        <Button
          className="w-full bg-[#0b305e] hover:bg-[#1357aa]"
          disabled={isLoading}
          onClick={() => handleClick("Verify")}
        >
          {isLoading ? <Loader /> : "Verify"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VerifyModal;
