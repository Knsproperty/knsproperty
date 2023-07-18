import SimpleSearch from "./search";
function SearchSection() {
  return (
    <section className=" relative z-50 lg:h-[30vh] h-auto bg-center bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]  bg-no-repeat bg-cover  ">
      <div className="w-full h-full lg:flex lg:items-center lg:justify-center bg-[#00000047] backdrop-brightness-50">
        <div className="lg:flex lg:items-center lg:justify-center flex-col py-5 lg:p-5 p-2 lg:px-0">
          <SimpleSearch />
        </div>
      </div>
    </section>
  );
}

export default SearchSection;


