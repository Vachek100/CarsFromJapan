import FormWrapper from "@/components/ui/formwrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  const inputStyle = "rounded-md border-2 border-solid border-white px-2 py-1";

  return (
    <FormWrapper title="Account Creation">
      <label className="font-Poppins mt-1 py-1 align-middle text-[#b8c4c2]">
        Email
      </label>
      <input
        className={`${inputStyle} font-Poppins`}
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label className="font-Poppins mt-1 py-1 text-[#b8c4c2]">Password</label>
      <input
        className={`${inputStyle} font-Poppins`}
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
