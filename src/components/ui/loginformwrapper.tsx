import { ReactNode } from "react";

type FormWrapperProps = {
  children: ReactNode;
};

const LoginFormWrapper = ({ children }: FormWrapperProps) => {
  return (
    <>
      <h2 className="font-Noto m-0 mb-8 text-center text-4xl">
        <span className="text-[#48a2d7]">Log</span>
        <span> </span>
        <span className="text-pink-500">In</span>
      </h2>
      <div className="mx-auto mb-12 grid max-w-md grid-cols-[auto_minmax(auto,400px)] gap-4">
        {children}
      </div>
    </>
  );
};

export default LoginFormWrapper;
