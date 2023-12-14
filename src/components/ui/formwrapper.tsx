import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className="font-Noto m-0 mb-8 text-center text-4xl">
        <span className="text-[#48a2d7]">{title.split(" ")[0]}</span>
        <span> </span>
        <span className="text-pink-500">{title.split(" ")[1]}</span>
      </h2>
      <div className="mx-auto mb-12 grid max-w-md grid-cols-[auto_minmax(auto,400px)] gap-4">
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
