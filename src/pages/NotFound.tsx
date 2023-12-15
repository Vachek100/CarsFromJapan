import { useNavigate } from "react-router-dom";
import NotFoundPicture from "@/assets/images/NotFound.png";


const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <div className="flex h-screen w-full items-center align-middle">
      <img src={NotFoundPicture} alt="" />
    </div>
  );
};

export default NotFound;
