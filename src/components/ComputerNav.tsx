import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const ComputerNav = () => {
  const navLinksStyle =
    "text-white text-lg px-3 py-2 rounded-md font-medium transition-colors hover:text-[#6acef5]";
  return (
    <div className="flex items-center gap-2 ">
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="space-x-4">
          <NavigationMenuItem>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "#6acef5" } : {};
              }}
              className={navLinksStyle}
              to="/"
            >
              Home
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "#6acef5" } : {};
              }}
              className={navLinksStyle}
              to="/store"
            >
              Store
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "#6acef5" } : {};
              }}
              className={navLinksStyle}
              to="/about"
            >
              About
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default ComputerNav;
