import { Bars3Icon } from "@heroicons/react/20/solid";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { NavLink } from "react-router-dom";
import AuthModal from "./modals/AuthModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import Questpfp from "@/assets/images/questpfp.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

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

const MobileNav = () => {
  const [user] = useAuthState(auth);
  const [profilePicture, setProfilePicture] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (userDoc.exists()) {
          setDisplayName(userDoc.data().displayName || "");
          setProfilePicture(userDoc.data().profilePicture || "");
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <Sheet>
      <SheetTrigger>
        <Bars3Icon className="h-8 w-8 text-white hover:text-[#6acef5] md:hidden" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full">
        <div className="relative flex  h-full flex-col items-center gap-8 py-10">
          <div className="flex w-full flex-col gap-6">
            {routes.map((route) => (
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "#6acef5" } : {};
                }}
                key={route.key}
                to={route.path}
                className="mx-auto flex py-1 text-xl hover:text-[#6acef5]"
              >
                {route.name}
              </NavLink>
            ))}
            <div className="my-3 mb-5 h-[9px] w-full shadow-lg shadow-gray-400"></div>
          </div>
          <div className=" flex h-fit gap-5">
            <Avatar className="h-14 w-14 border-2 border-solid border-white">
              {user ? (
                <AvatarImage alt="usersProfilePicture" src={profilePicture} />
              ) : (
                <AvatarImage alt="questsProfilePicture" src={Questpfp} />
              )}
              {user ? (
                <AvatarFallback className="text-xs">
                  {displayName}
                </AvatarFallback>
              ) : (
                <AvatarFallback className="text-xs">Quest</AvatarFallback>
              )}
            </Avatar>
            <div className="flex flex-col py-1.5">
              {user ? (
                <>
                  <h1 className="text-lg text-black">Václav Králík</h1>
                  <p className="text-sm">{user.email}</p>
                </>
              ) : (
                <>
                  <h1 className="text-md text-black">Quest</h1>
                  <p className="text-xs">quest@email.com</p>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <NavLink end to="/profile">
              Profile
            </NavLink>
            <NavLink to="/billing">Billing</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
            <div
              className={`max-[mt-200px] bottom-0 flex text-lg hover:cursor-pointer ${
                user ? "text-red-500" : "text-black"
              }`}
            >
              <AuthModal />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
