import Container from "@/blocks/atoms/container";
import Form from "@/blocks/molecules/forms/job";
import React from "react";
import { FiMapPin, FiDollarSign } from "react-icons/fi";

export default async function page({ params }: any) {
  const [{ attributes, id }] = await getJob(params.slug);
  return (
    <div>
      <Container>
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-5 lg:py-10 ">
          <div className="_center h-[300px] xl:h-auto bg-lightgray roudned-md mb-2 bg-[url('/pettern.avif')] bg-cover">
            <h1 className=" text-3xl text-secondary font-semibold text-center">
              {attributes.position}
            </h1>
          </div>
          <div className="lg:px-0 px-5">
            <h1 className="py-2 text-xl text-secondary font-semibold ">
              {attributes.position}
            </h1>
            <p className="text-sm font-[400] flex items-center">
              <FiMapPin className="mr-2" />
              {attributes.location}
            </p>
            <p className="text-sm font-[400] flex items-center">
              <FiDollarSign className="mr-2" />
              {attributes.salary} ADS
            </p>
            <p className="text-sm font-light flex items-center">
              {attributes.description}
            </p>

            <section className="my-2">
              <h3 className="mb-1">Responsiblity</h3>
              <p className="text-sm font-light flex items-center">
                {attributes.responsibilities}
              </p>
            </section>

            <section className="my-2">
              <h3 className="mb-1">Requirements</h3>
              <p className="text-sm font-light flex items-center">
                {attributes.requirements}
              </p>
            </section>
          </div>
        </div>

      </Container>
      <Form id={id} />
    </div>
  );
}
const getJob = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/job/${slug}`, {
    cache: "force-cache",
  });
  return await res.json();
};
