import FormWrapper from "@/components/ui/formwrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) => {
  const inputStyle = "rounded-md border border-solid border-[#001e2b] px-2 py-1";

  return (
    <FormWrapper title="User Address">
      <label className=" mt-1 py-1 text-[#001e2b]">Street</label>
      <input
        className={`${inputStyle} `}
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label className=" mt-1 py-1 text-[#001e2b]">City</label>
      <input
        className={`${inputStyle} `}
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label className=" mt-1 py-1 text-[#001e2b]">State</label>
      <input
        className={`${inputStyle} `}
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label className=" mt-1 py-1 text-[#001e2b]">Zip</label>
      <input
        className={`${inputStyle} `}
        required
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AddressForm;
