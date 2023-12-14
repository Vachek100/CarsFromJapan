import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return <h1>404 NotFound</h1>;
};

export default NotFound;
