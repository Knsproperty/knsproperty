import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface CountryInputProps {
  value: string;
  onChange: any;
}

export default function CountryInput({
  value,
  onChange,
}: CountryInputProps): JSX.Element {
  return (
    <PhoneInput
      value={value}
      onChange={onChange}
      defaultCountry="AE"
      placeholder="Enter phone number"
      className="text-sm bg-lightgray border border-lightgreen p-2 rounded-md placeholder:text-sm placeholder:font-light"
    />
  );
}
