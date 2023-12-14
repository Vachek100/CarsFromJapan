import AccountForm from "@/components/AccountSignUpForm";
import AddressForm from "@/components/AddressSignUpForm";
import UserForm from "@/components/UserSignUpForm";
import { useMultistepForm } from "@/utilities/useMultistepForm";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

//TODO after sign up show alert or something like that with successful signing up

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function SignUp() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
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
    if (!isLastStep) return next();
    NavigateTo();
  };

  return (
    <div
      className="relative m-4 mx-auto max-w-3xl
             rounded-md border border-solid border-[#001e2b] bg-white p-8 shadow-[11px_11px_22px_#9f9f9f,_-11px_-11px_22px_#ffffff] "
    >
      <form onSubmit={onSubmit}>
        <div className="absolute right-2 top-2 mr-6 mt-6 rounded-md bg-pink-500 px-4 py-2 text-sm font-bold text-white">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="mx-auto mt-4 grid max-w-md grid-cols-1 gap-4">
          <button
            className={`${buttonStyle} font-Poppins bg-pink-500 font-bold text-white shadow-md hover:bg-pink-600`}
            type="submit"
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
          {!isFirstStep && (
            <button
              className={`${buttonStyle} bg-[#48a2d7] font-bold text-white shadow-md hover:bg-[#367ba3]`}
              type="button"
              onClick={back}
            >
              Back
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignUp;
