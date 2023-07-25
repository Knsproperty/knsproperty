import Image from "next/image";
import NewsletterForm from "../molecules/forms/newsletter";

export default function NewsletterSection() {
  return (
    <section className="relative group py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
      <div className="absolute inset-0">
        <Image
          width={1260}
          height={513}
          className="object-cover w-full h-full md:object-left group-hover:scale-150 transition-all duration-500 ease-in-out md:origin-top-left "
          src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg"
          alt="background-image"
        />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent" />
      <div className="absolute inset-0 block bg-black/60 md:hidden" />
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Get Regular Updated
          </h2>
          <p className="mt-4 text-lightgray text-sm">
            Stay tuned for exciting updates, exclusive offers, and valuable
            insights in our upcoming newsletter. Don't miss out!
          </p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
