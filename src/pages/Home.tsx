import Container from "@/components/ui/container";
import { firestore } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

const Home = () => {
  const [inputs, setInputs] = useState({
    id: "",
    name: "",
    price: "",
    imgURL: "",
    year: "",
    km: "",
    grade: "",
    engine: "",
    route: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCar = {
      ...inputs,
      id: Number(inputs.id),
      price: Number(inputs.price),
      year: Number(inputs.year),
    };
    await setDoc(doc(firestore, "cars", inputs.id), newCar);
    alert(`saved to db, ${inputs.name}`);
  };
  return (
    <>
      <div className="h-auto w-full bg-white py-7 shadow-md">
        <Container>
          <h1 className="text-[30px] font-bold">Home</h1>
        </Container>
      </div>
      <Container>
        <h1 className="mt-12">Home</h1>
        {/* temp form */}
        <form
          className="flex max-w-sm flex-col gap-3 p-6"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleInputChange}
            className=" border-2 border-pink-500 bg-gray-300"
            type="text"
            placeholder="car id"
            name="id"
          />
          <input
            onChange={handleInputChange}
            className=" border-2 border-pink-500 bg-gray-300"
            type="text"
            placeholder="car name"
            name="name"
          />
          <input
            onChange={handleInputChange}
            className=" border-2 border-pink-500 bg-gray-300"
            type="text"
            placeholder="car price"
            name="price"
          />
          <input
            onChange={handleInputChange}
            className=" border-2 border-pink-500 bg-gray-300"
            type="text"
            placeholder="car imgURL"
            name="imgURL"
          />
          <input
            onChange={handleInputChange}
            className=" border-2 border-pink-500 bg-gray-300"
            type="text"
            placeholder="car year"
            name="year"
          />
          <input
            onChange={handleInputChange}
            className=" border-2 border-pink-500 bg-gray-300"
            type="text"
            placeholder="car km"
            name="km"
          />
          <input
            onChange={handleInputChange}
            className=" border-2 border-pink-500 bg-gray-300"
            type="text"
            placeholder="car grade"
            name="grade"
          />
          <input
            onChange={handleInputChange}
            className=" border-2 border-pink-500 bg-gray-300"
            type="text"
            placeholder="car engine"
            name="engine"
          />
          <input
            onChange={handleInputChange}
            className=" border-2 border-pink-500 bg-gray-300"
            type="text"
            placeholder="car route"
            name="route"
          />
          <button className="bg-pink-500">Save to db</button>
        </form>
      </Container>
    </>
  );
};

export default Home;
