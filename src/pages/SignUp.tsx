import AccountForm from "@/components/AccountSignUpForm";
import AddressForm from "@/components/AddressSignUpForm";
import UserForm from "@/components/UserSignUpForm";
import { useMultistepForm } from "@/utilities/useMultistepForm";
import { FormEvent } from "react";
import { useState } from "react";

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

function App() {
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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  };

  return (
    <div className="relative m-4 mx-auto max-w-3xl rounded-md bg-[#001e2b] p-8 shadow-xl">
      <form onSubmit={onSubmit}>
        <div className="font-Poppins absolute right-2 top-2 mr-6 mt-6 rounded-md bg-[#00ed64] px-4 py-2 text-sm font-bold text-[#014e3d]">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="mx-auto mt-4 grid max-w-md grid-cols-1 gap-4">
          <button
            className={`${buttonStyle} font-Poppins bg-[#00ed64] font-bold text-[#001e2b] shadow-md hover:bg-[#00ba4e]`}
            type="submit"
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
          {!isFirstStep && (
            <button
              className={`${buttonStyle} font-Poppins bg-white font-bold text-[#001e2b] shadow-md hover:bg-[#cccccc]`}
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

export default App;
