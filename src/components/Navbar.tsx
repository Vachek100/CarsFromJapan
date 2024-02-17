import Container from "./ui/container";
import CFJPNLogo from "@/assets/images/CFJPNLogo.png";
import { Button } from "./ui/button";
import ProfileButton from "./ui/ProfileButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { Link, Outlet } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const routes = [
  {
    key: 0,
    name: "Home",
    path: "/",
  },
  {
    key: 1,
    name: "Store",
    path: "/store",
  },
  {
    key: 2,
    name: "About",
    path: "/about",
  },
];

const Navbar = () => {
  const navLinksStyle =
    "text-white text-lg px-3 py-2 rounded-md font-medium transition-colors hover:text-[#6acef5]";

  return (
    <>
      <nav className="bg-[#0b305e] shadow-xl">
        <Container>
          <div className="relative flex items-center justify-between px-3 py-5 md:pl-28">
            <img
              className="absolute left-[80px] top-[0px] h-[100px] w-[100px] shadow-[0_2px_4px_rgba(0,0,0,.25)] md:left-[0px]"
              src={CFJPNLogo}
              alt=""
            />
            <div className="flex items-center gap-2 ">
              <Sheet>
                <SheetTrigger>
                  <Button
                    variant="ghost"
                    className="rounded-full p-3 hover:bg-pink-500 md:hidden"
                  >
                    <Bars3Icon className="h-6 w-6 text-white" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4">
                    {routes.map((route) => (
                      <Button
                        variant="ghost"
                        className="mx-auto w-fit rounded-full px-5 py-3 hover:bg-pink-500 hover:text-white"
                      >
                        <Link
                          key={route.key}
                          to={route.path}
                          className="flex px-2 py-1 text-lg"
                        >
                          {route.name}
                        </Link>
                      </Button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
              <NavigationMenu>
                <NavigationMenuList className="space-x-4">
                  <NavigationMenuItem>
                    <Link className={navLinksStyle} to="/">
                      Home
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link className={navLinksStyle} to="/store">
                      Store
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link className={navLinksStyle} to="/about">
                      About
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-5">
              <ProfileButton />
            </div>
          </div>
        </Container>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
