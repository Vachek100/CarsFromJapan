import { NavLink } from "react-router-dom";

const Aside = () => {
  const asideLinkStyle = "hover:underline underline-offset-4";

  return (
    <div className="flex flex-col gap-2">
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "#6acef5" } : {};
        }}
        end
        className={asideLinkStyle}
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "#6acef5" } : {};
        }}
        className={asideLinkStyle}
        to="/profile/account"
      >
        Account
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "#6acef5" } : {};
        }}
        className={asideLinkStyle}
        to="/profile/appearance"
      >
        Appearance
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "#6acef5" } : {};
        }}
        className={asideLinkStyle}
        to="/profile/notifications"
      >
        Notifications
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "#6acef5" } : {};
        }}
        className={asideLinkStyle}
        to="/profile/display"
      >
        Display
      </NavLink>
    </div>
  );
};

export default Aside;
