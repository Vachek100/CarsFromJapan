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

const ProfileButton = () => {
  const linkHoverStyles = "hover:text-pink-500 transition-colors";

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
        <DropdownMenuItem className={`${linkHoverStyles} cursor-pointer`}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className={`${linkHoverStyles} cursor-pointer`}>
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem className={`${linkHoverStyles} cursor-pointer`}>
          Favorites
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={`${linkHoverStyles} cursor-pointer`}>
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
