import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="mt-8 flex flex-col gap-2">
      <Link to="/profile">Profile</Link>
      <Link to="/profile/account">Account</Link>
      <Link to="/profile/appearance">Appearance</Link>
      <Link to="/profile/notifications">Notifications</Link>
      <Link to="/profile/display">Display</Link>
    </div>
  );
};

export default Aside;
