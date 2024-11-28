import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { auth, firestore } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { Label } from "./ui/label";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
import Loader from "./Loader";
import { collection, query, where, getDocs } from "firebase/firestore";
import PasswordChangeModals from "./modals/PasswordChangeModals";

const Security = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const fetchUserData = useCallback(async () => {
    const user = auth.currentUser;
    if (user) {
      const userDoc = await getDoc(doc(firestore, "users", user.uid));
      if (userDoc.exists()) {
        setEmail(userDoc.data().email || "");
        setPhone(userDoc.data().phoneNumber || "");
      }
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleUpdate = async () => {
    setIsLoading(true);
    const user = auth.currentUser;
    if (!user) return;
    const userRef = doc(firestore, "users", user.uid);

    if (!email.trim()) {
      console.log("Email cannot be empty");
      setIsLoading(false);
      fetchUserData();
      return;
    }

    const q = query(
      collection(firestore, "users"),
      where("email", "==", email),
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      console.log("Email already exists");
      setIsLoading(false);
      return;
    }

    // Validate phone number
    if (phone && phone.length > 9) {
      console.log("Phone number must be at most 9 digits long");
      setIsLoading(false);
      return;
    }

    await updateDoc(userRef, {
      email: email,
      phoneNumber: phone,
    });

    setIsLoading(false);
  };

  return (
    <div className="grid gap-6">
      <div className="grid gap-3">
        <Label className="text-xl">Contact</Label>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>E-mail</CardTitle>
            <CardDescription>
              This e-mail is connected to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </CardContent>
          <DropdownMenuSeparator />
          <CardHeader>
            <CardTitle>Phone number</CardTitle>
            <CardDescription>
              This phone number is connected to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-3">
        <Label className="text-xl">Security</Label>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              For better security we suggest to pick a strong password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PasswordChangeModals />
          </CardContent>
        </Card>
      </div>
      <Button
        className="w-fit bg-[#0b305e] hover:bg-[#1357aa]"
        onClick={handleUpdate}
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : "Update"}
      </Button>
    </div>
  );
};

export default Security;
