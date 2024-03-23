import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Questpfp from "@/assets/images/questpfp.jpg";
import { NavLink } from "react-router-dom";
import AuthModal from "../modals/AuthModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

const ProfileButton = () => {
  const [user] = useAuthState(auth);
  const [profilePicture, setProfilePicture] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (userDoc.exists()) {
          setDisplayName(userDoc.data().displayName || "");
          setProfilePicture(userDoc.data().profilePicture || "");
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className=" border-2 border-solid border-white transition-colors hover:border-[#6acef5]">
          {user ? (
            <AvatarImage alt="usersProfilePicture" src={profilePicture} />
          ) : (
            <AvatarImage alt="questsProfilePicture" src={Questpfp} />
          )}
          {user ? (
            <AvatarFallback className="text-xs">{displayName}</AvatarFallback>
          ) : (
            <AvatarFallback className="text-xs">Quest</AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <NavLink end to="/profile">
            Profile
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <NavLink to="/billing">Billing</NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <NavLink to="/favorites">Favorites</NavLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <p className="cursor-pointer rounded-sm px-2 py-1.5 text-sm hover:bg-[#f1f5f9]">
          <AuthModal />
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
