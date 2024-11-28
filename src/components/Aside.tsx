import { NavLink } from "react-router-dom";

const Aside = () => {
  const asideLinkStyle = "hover:underline underline-offset-4";
  const buttonsActive = ({ isActive }) => {
    return isActive ? { color: "#1b7df6" } : {};
  };

  return (
    <div className="flex flex-col gap-2">
      <NavLink
        style={buttonsActive}
        end
        className={asideLinkStyle}
        to="/settings/profile"
      >
        Profile
      </NavLink>
      <NavLink
        style={buttonsActive}
        className={asideLinkStyle}
        to="/settings/security"
      >
        Security and privacy
      </NavLink>
      <NavLink
        style={buttonsActive}
        className={asideLinkStyle}
        to="/settings/appearance"
      >
        Appearance
      </NavLink>
      <NavLink
        style={buttonsActive}
        className={asideLinkStyle}
        to="/settings/notifications"
      >
        Notifications
      </NavLink>
      <NavLink
        style={buttonsActive}
        className={asideLinkStyle}
        to="/profile/display"
      >
        Display
      </NavLink>
    </div>
  );
};

export default Aside;
