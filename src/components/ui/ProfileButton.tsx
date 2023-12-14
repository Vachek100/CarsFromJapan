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
        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Favorites
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Link to="/sign-up" target="blank">Sign Up</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
