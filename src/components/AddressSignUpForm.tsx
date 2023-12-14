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
  const inputStyle = "rounded-md border-2 border-solid border-white px-2 py-1";

  return (
    <FormWrapper title="User Address">
      <label className="font-Poppins mt-1 py-1 text-[#b8c4c2]">Street</label>
      <input
        className={`${inputStyle} font-Poppins`}
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label className="font-Poppins mt-1 py-1 text-[#b8c4c2]">City</label>
      <input
        className={`${inputStyle} font-Poppins`}
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label className="font-Poppins mt-1 py-1 text-[#b8c4c2]">State</label>
      <input
        className={`${inputStyle} font-Poppins`}
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label className="font-Poppins mt-1 py-1 text-[#b8c4c2]">Zip</label>
      <input
        className={`${inputStyle} font-Poppins`}
        required
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AddressForm;
