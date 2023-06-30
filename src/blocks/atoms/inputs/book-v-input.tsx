import React from "react";
interface Props {
  type: string;
  placeholder: string;
}
export default function Book_Input({ type, placeholder }: Props) {
  return (
    <div className="bg-white  rounded-full flex items-center py-4 px-[30px] gap-4 relative">
      <input
        className="border-none outline-none placeholder:text-sm text-sm placeholder:font-light w-full "
        placeholder={placeholder}
        type={type}
      />

      {/* <div className="absolute top-[5rem] bg-white p-5 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deserunt non iure, eius facere earum sed aliquid ipsa, perferendis corporis laborum amet ab, delectus cupiditate eum quaerat accusantium. Alias, quod?</div> */}
    </div>
  );
}
