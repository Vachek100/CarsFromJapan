import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/settings/profile");
  }, [navigate]);
  return <> </>;
};

export default RedirectToProfile;
