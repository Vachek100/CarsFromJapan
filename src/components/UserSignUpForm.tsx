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
  const inputStyle = "rounded-md border-2 border-solid border-white px-2 py-1";
  return (
    <FormWrapper title="User Details">
      <label className="font-Poppins mt-1 py-1 text-[#b8c4c2]">
        First Name
      </label>
      <input
        className={`${inputStyle} font-Poppins`}
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label className="font-Poppins mt-1 py-1 text-[#b8c4c2]">Last Name</label>
      <input
        className={`${inputStyle} font-Poppins`}
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label className="font-Poppins mt-1 py-1 text-[#b8c4c2]">Age</label>
      <input
        className={`${inputStyle} font-Poppins`}
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
