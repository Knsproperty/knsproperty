import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

export default function CountryInput(): JSX.Element {
  const [value, setValue] = useState<string | undefined>();

  return (
    <div className="bg-white  rounded-full flex items-center py-4 px-[30px] gap-4 relative">
      <PhoneInput
        defaultCountry="AE"
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        className="border-none outline-none placeholder:text-sm text-sm placeholder:font-light w-full focus-visible:no-underline"
      />
    </div>
  );
}
