import Container from "./ui/container";
import CFJPNLogo from "@/assets/images/CFJPNLogo.png";
import { HeartIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { Button } from "./ui/button";

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
          <div className="flex gap-5">
            <Button
              variant="default"
              className="rounded-full bg-white px-5 py-3 font-bold text-[#020817] shadow-md hover:bg-pink-500 hover:text-white"
            >
              Log In
            </Button>
            <Button className="group relative rounded-full bg-white p-3 shadow-md hover:bg-pink-500">
              <HeartIcon className="h-6 w-6 text-pink-500 group-hover:text-white" />
              <div className="absolute bottom-0 right-0 flex h-[14px] w-[14px] translate-x-[25%] translate-y-[-175%] items-center justify-center rounded-full bg-[#fe0c10] font-bold shadow-sm"></div>
            </Button>
            <Button
              variant="ghost"
              className="rounded-full p-3 hover:bg-pink-500"
            >
              <SunIcon className="h-6 w-6 text-white" />
              <MoonIcon className="hidden h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
