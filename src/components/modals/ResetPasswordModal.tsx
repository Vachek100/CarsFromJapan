import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Loader from "../Loader";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import {
  handleResetErrorMessage,
  handleSentEmailMessage,
} from "@/toasts/toastMessages";

const ResetPasswordModal = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await sendPasswordResetEmail(email);
    if (success) {
      handleSentEmailMessage();
    }
  };

  useEffect(() => {
    if (error) {
      handleResetErrorMessage();
    }
  }, [error]);

  return (
    <form onSubmit={handleReset}>
      <Card className="w-[350px]">
        <CardHeader className="rounded-t-md bg-[#0b305e] text-center">
          <CardTitle className="text-2xl text-white">Reset Password</CardTitle>
          <CardDescription className="text-white">
            Forgotten your password? Enter your e-mail address below, and we'll
            send you an e-mail allowing you to reset it.
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2 pt-6">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@email.com"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-center gap-3 py-6">
          <Button className="w-full bg-[#0b305e] hover:bg-[#1357aa]">
            {sending ? <Loader /> : "Reset Password"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ResetPasswordModal;
