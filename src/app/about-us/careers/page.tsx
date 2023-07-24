import { Main } from "@/types/job";
import Landing from "@/blocks/sections/landing";
import Container from "@/blocks/atoms/container";
import Job_Card from "@/blocks/molecules/cards/job-card";
import strapi, { populate } from "@/utils/strapi";

export default async function Page() {
  const jobsData = await strapi.find<Main[]>("jobs", {
    populate: populate,
  });
  const jobs = jobsData.data.map((it, i) => <Job_Card key={i} {...it} />);
  return (
    <div>
      <Landing background="url('/bg-1.webp')">
        <div>
          <h1 className=" lg:text-3xl text-3xl font-medium text-white text-center">
            Careers at K&S property
          </h1>
        </div>
      </Landing>
      <Container>
        <section>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5 my-10 px-5">
            {jobs}
          </div>
        </section>
      </Container>
    </div>
  );
}
