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
import { Link } from "react-router-dom";
import AuthModal from "../modals/AuthModal";


const ProfileButton = () => {

 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className=" border-2 border-solid border-white transition-colors hover:border-pink-500">
          <AvatarImage src={Zoropfp} />
          <AvatarFallback>VK</AvatarFallback>
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
        <p className="hover:bg-[#f1f5f9] px-2 py-1.5 text-sm cursor-pointer rounded-sm">
          <AuthModal />
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
