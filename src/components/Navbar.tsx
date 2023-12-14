import Container from "./ui/container";
import CFJPNLogo from "@/assets/images/CFJPNLogo.png";
import { Button } from "./ui/button";
import ProfileButton from "./ui/ProfileButton";
import { ModeToggle } from "./ModeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { Outlet } from "react-router-dom";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Store",
    path: "/store",
  },
  {
    name: "About",
    path: "/about",
  },
];

const Navbar = () => {
  const navButtonsStyles = "text-white font-bold text-base ";

  return (
    <>
      <nav className="bg-[#48a2d7] shadow-xl">
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
                    {routes.map((route, i) => (
                      <Button
                        variant="ghost"
                        className="mx-auto w-fit rounded-full px-5 py-3 hover:bg-pink-500 hover:text-white"
                      >
                        <a
                          key={i}
                          href={route.path}
                          className="flex px-2 py-1 text-lg"
                        >
                          {route.name}
                        </a>
                      </Button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
              {routes.map((route, i) => (
                <Button
                  variant="ghost"
                  className="hidden rounded-full px-5 py-3 hover:bg-pink-500 md:flex"
                >
                  <a key={i} href={route.path} className={navButtonsStyles}>
                    {route.name}
                  </a>
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <ModeToggle />
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
