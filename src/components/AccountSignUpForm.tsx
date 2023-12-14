import FormWrapper from "@/components/ui/formwrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  const inputStyle = "rounded-md border border-solid border-[#001e2b] px-2 py-1";

  return (
    <FormWrapper title="Account Creation">
      <label className=" mt-1 py-1 align-middle text-[#001e2b]">
        Email
      </label>
      <input
        className={`${inputStyle} `}
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label className=" mt-1 py-1 text-[#001e2b]">Password</label>
      <input
        className={`${inputStyle} `}
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
