import Aside from "@/components/Aside";
import ProfileSettingsHeader from "@/components/ProfileHeader";
import Container from "@/components/ui/container";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="h-auto w-full bg-white py-7 shadow-md">
        <Container>
          <h1 className="text-[30px] font-bold">Profile</h1>
        </Container>
      </div>
      <Container>
        <div className=" mt-10 rounded-md bg-white p-8 shadow-lg">
          <ProfileSettingsHeader />
          <div className="flex gap-20">
            <Aside />
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
