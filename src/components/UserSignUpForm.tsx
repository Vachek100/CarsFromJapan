import FormWrapper from "@/components/ui/formwrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  const inputStyle =
    "rounded-md border border-solid border-[#001e2b] px-2 py-1";
  return (
    <FormWrapper title="User Details">
      <label className=" mt-1 py-1 text-[#001e2b] ">First Name</label>
      <input
        className={`${inputStyle} `}
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label className=" mt-1 py-1 text-[#001e2b] ">Last Name</label>
      <input
        className={`${inputStyle} `}
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label className=" mt-1 py-1 text-[#001e2b] ">Age</label>
      <input
        className={`${inputStyle} `}
        required
        min={1}
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
