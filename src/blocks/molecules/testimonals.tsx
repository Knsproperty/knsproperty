import Image from "next/image";
import Container from "../atoms/container";
import { testimonials } from "@/config/testimonals";
const Testimonals = () => {
  return (
    <div className="lg:pt-[60px] lg:pb-[80px] py-10 ">
      <Container>
        <section className="text-center">
          <div className="">
            <h2 className="text-secondary font-medium pb-[1rem] lg:text-2xl md:text-xl text-xl capitalize">
              testimonials
            </h2>
            <p className="col-md-7 col-11 mx-auto text-primary text-base sm:w-[60%] pb-[1rem] font-light">
              "Hear what our clients have to say about their experience with us"
            </p>
          </div>
          <div className="grid gap-x-6 md:grid-cols-3  lg:gap-x-12">
            {testimonials.map((t) => <User key={t.name} {...t} />)}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Testimonals;


interface User {
  name: string,
  image: string,
  position: string,
  review: string
}

const User: React.FC<User> = ({ name, image, position, review }) => {
  return (
    <div className="mb-12 md:mb-0 bg-lightgray px-5 py-10 rounded-md ">
      <div className="mb-6 flex justify-center">
        <Image
          height={60}
          width={60}
          src={image}
          className="w-[120px] rounded-full shadow-lg dark:shadow-black/20"
          alt="user-image"
        />
      </div>
      <h2 className="mb-2 text-lg">{name}</h2>
      <h3 className="mb-4 font-medium text-sm text-primary dark:text-primary-400">
        {position}
      </h3>
      <p className="mb-4 font-light text-sm px-5 md:px-0">{review}</p>
    </div>
  );
};
