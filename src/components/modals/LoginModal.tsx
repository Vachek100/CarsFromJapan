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

const LoginModal = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader className="bg-[#48a2d7] text-center">
        <CardTitle className="text-2xl text-white">Log In</CardTitle>
        <CardDescription className="text-white">
          To access your profile
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-14">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="emailLogin" placeholder="Email" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="passwordLogin" placeholder="Password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-center gap-3 pb-14">
        <Button className="w-full bg-[#48a2d7] hover:bg-[#367ba3]">
          Log In
        </Button>
        <p>
          Don't have an account yet?{" "}
          <span className="cursor-pointer text-pink-500 hover:text-pink-700">
            Sign Up
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginModal;
