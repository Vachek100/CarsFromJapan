import Aside from "@/components/Aside";
import Container from "@/components/ui/container";
import { Outlet } from "react-router-dom";

const SettingsPage = () => {
  return (
    <>
      <div className="h-auto w-full bg-white py-7 shadow-md">
        <Container>
          <h1 className="text-[30px] font-bold">Settings</h1>
        </Container>
      </div>
      <Container>
        <div className="mt-10 flex gap-20">
          <Aside />
          <div>
            <Outlet />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SettingsPage;
