import Container from "./ui/container";
import CFJPNLogo from "@/assets/images/CFJPNLogo.png";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { Button } from "./ui/button";
import ProfileButton from "./ui/ProfileButton";

const routes = [
  {
    name: "Home",
    path: "/home",
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
    <nav className=" bg-[#48a2d7] shadow-xl">
      <Container>
        <div className="relative flex items-center justify-between px-3 py-5 pl-28">
          <img
            className="absolute left-[0px] top-[0px] h-[100px] w-[100px] shadow-[0_2px_4px_rgba(0,0,0,.25)]"
            src={CFJPNLogo}
            alt=""
          />
          <div className="flex items-center gap-2 ">
            {routes.map((route, i) => (
              <Button
                variant="ghost"
                className="rounded-full px-5 py-3 hover:bg-pink-500"
              >
                <a key={i} href={route.path} className={navButtonsStyles}>
                  {route.name}
                </a>
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <Button
              variant="ghost"
              className="rounded-full p-3 hover:bg-pink-500"
            >
              <SunIcon className="h-6 w-6 text-white" />
              <MoonIcon className="hidden h-6 w-6 text-white" />
            </Button>
            <ProfileButton />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
