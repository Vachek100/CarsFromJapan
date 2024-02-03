import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Zoropfp from "@/assets/images/zoropfp.jpg";
import Questpfp from "@/assets/images/questpfp.jpg";
import { Link } from "react-router-dom";
import AuthModal from "../modals/AuthModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";

const ProfileButton = () => {
  const [user] = useAuthState(auth);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className=" border-2 border-solid border-white transition-colors hover:border-pink-500">
          {user ? (
            <AvatarImage src={Zoropfp} />
          ) : (
            <AvatarImage src={Questpfp} />
          )}
          {user ? (
            <AvatarFallback>VK</AvatarFallback>
          ) : (
            <AvatarFallback>QU</AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Link to="/favorites">Favorites</Link>
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
