import React from "react";

interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Book_Input({
  type,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className="bg-white rounded-full flex items-center py-4 px-[30px] gap-4 relative">
      <input
        className="border-none outline-none placeholder:text-sm text-sm w-full"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
