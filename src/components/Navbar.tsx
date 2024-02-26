import Container from "./ui/container";
import CFJPNLogo from "@/assets/images/CFJPNLogo.png";
import ProfileButton from "./ui/ProfileButton";
import { Outlet } from "react-router-dom";

import MobileNav from "./MobileNav";
import ComputerNav from "./ComputerNav";

const Navbar = () => {
  return (
    <>
      <nav className="max-h-[82px] min-h-[82px] bg-[#0b305e] shadow-xl">
        <Container>
          <div className="relative flex max-h-[82px] min-h-[82px] items-center justify-between px-0 py-5 md:px-3 md:pl-28">
            <img
              className="absolute left-[0px] top-[0px] h-[100px] w-[100px] shadow-[0_2px_4px_rgba(0,0,0,.25)] "
              src={CFJPNLogo}
              alt=""
            />
            <ComputerNav />
            <MobileNav />
            <div className=" hidden items-center gap-5 md:flex">
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
