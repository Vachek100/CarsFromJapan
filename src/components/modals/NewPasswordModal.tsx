import { useState } from "react";
import {
  getAuth,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Loader from "../Loader";
import {
  errorPasswordUpdateMessage,
  successfulPasswordUpdateMessage,
} from "@/toasts/toastMessages";
import { useSetRecoilState } from "recoil";
import { isUserVerifiedState } from "@/atoms/verifyModalAtom";

const NewPasswordModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const setIsUserVerified = useSetRecoilState(isUserVerifiedState);

  const handleChangePassword = async () => {
    setIsLoading(true);

    const user = getAuth().currentUser;
    if (!user || !user.email) {
      errorPasswordUpdateMessage();
      setIsLoading(false);
      return;
    }

    const credential = EmailAuthProvider.credential(user.email, oldPassword);

    try {
      await reauthenticateWithCredential(user, credential);
      if (newPassword !== confirmPassword) {
        setIsLoading(false);
        return;
      }
      await updatePassword(user, newPassword);
      successfulPasswordUpdateMessage();
      setIsLoading(false);
      setIsUserVerified(true);
    } catch (error) {
      errorPasswordUpdateMessage();
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader className="rounded-t-md bg-[#0b305e] text-center">
        <CardTitle className="text-2xl text-white">
          Change your password
        </CardTitle>
        <CardDescription className="text-white">
          Your new password must be different from old password.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-5 pb-2 pt-6">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="oldPassword">Old password</Label>
          <Input
            type="password"
            name="oldPassword"
            id="oldPassword"
            placeholder="Old Password"
            required
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="newPassword">New password</Label>
          <Input
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="New Password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-center gap-3 py-6">
        <Button
          className="w-full bg-[#0b305e] hover:bg-[#1357aa]"
          disabled={isLoading}
          onClick={handleChangePassword}
        >
          {isLoading ? <Loader /> : "Change password"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewPasswordModal;
