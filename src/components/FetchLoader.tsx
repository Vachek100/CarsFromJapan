import PacmanLoader from "react-spinners/PacmanLoader";

const FetchLoader = () => {
  return (
    <PacmanLoader
      className="absolute left-[42.5%] top-[10rem]"
      color="#0b305e"
      size={50}
    />
  );
};

export default FetchLoader;
