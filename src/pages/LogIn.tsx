import LogInForm from "@/components/LogInForm";
import { useMultistepForm } from "@/utilities/useMultistepForm";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//TODO after sign up show alert or something like that with successful signing up

type FormData = {
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  email: "",
  password: "",
};

function LogIn() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <LogInForm {...data} updateFields={updateFields} />,
  ]);

  const buttonStyle = " max-w-md py-2 px-4 rounded-md ";

  const navigate = useNavigate();
  const NavigateTo = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    NavigateTo();
  };

  return (
    <div
      className="relative m-4 mx-auto max-w-3xl
             rounded-md border border-solid border-[#001e2b] bg-white p-8 shadow-[11px_11px_22px_#9f9f9f,_-11px_-11px_22px_#ffffff] "
    >
      <form onSubmit={onSubmit}>
        {step}
        <div className="mx-auto mt-4 grid max-w-md grid-cols-1 gap-4 ">
          <button
            className={`${buttonStyle} font-Poppins bg-pink-500 font-bold text-white shadow-md hover:bg-pink-600`}
            type="submit"
          >
            Log In
          </button>
          <Link
            className="text-center text-pink-500"
            to={"/sign-up"}
          >
            Don't have account? Sign up.
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
