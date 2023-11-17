import Container from "./ui/container";
import CFJPNLogo from "@/assets/images/CFJPNLogo.png";
import { HeartIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const navButtonsStyles =
    "text-white font-bold text-base hover:text-[#0f4b90]";
  

  return (
    <Container>
      <nav className="relative mt-5 rounded-full bg-[#48a2d7] px-5 drop-shadow-xl">
        <div className="flex items-center justify-between px-3 py-3 pl-28">
          <img
            className="absolute left-[0px] h-[100px] w-[100px] shadow-[0_2px_4px_rgba(0,0,0,.25)]"
            src={CFJPNLogo}
            alt=""
          />
          <div className="flex items-center gap-9 ">
            <a className={`${navButtonsStyles}`} href="/">
              Home
            </a>
            <a className={`${navButtonsStyles}`} href="/store">
              Store
            </a>
            <a className={`${navButtonsStyles}`} href="/about">
              About
            </a>
          </div>
          <div className="flex gap-5">
            <button className="rounded-full bg-white px-5 py-3 font-bold shadow-md hover:bg-pink-500 hover:text-white">
              Log In
            </button>
            <button className="group relative rounded-full bg-white p-3 shadow-md hover:bg-pink-500">
              <HeartIcon className="h-6 w-6 text-pink-500 group-hover:text-white" />
              <div className="font-bold absolute bottom-0 right-0 flex h-[14px] w-[14px] translate-x-[0%] translate-y-[-250%] items-center justify-center rounded-full bg-[#fe0c10] shadow-sm">
              </div>
            </button>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
