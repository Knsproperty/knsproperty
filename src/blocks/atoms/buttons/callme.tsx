"use client";
const CallMe = ({ title }: any) => (
  <a
    onClick={(e) => {
      e.preventDefault();
      window.location.href = `https://api.whatsapp.com/send?phone=+971502265265&text=I%20wanted%20to%20know%20more%20about%20this%20property%3A%20${title}`;
    }}
    className=" rounded-full px-5 py-2.5 overflow-hidden group bg-[tomato] relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-[tomato] transition-all ease-out duration-300"
  >
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative text-white capitalize">inquire now</span>
  </a>
);

export default CallMe;
