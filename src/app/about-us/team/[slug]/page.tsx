import Container from "@/blocks/atoms/container";
import strapi from "@/utils/strapi";
import Image from "next/image";

export default async function Page({ params: { slug } }: any) {
  const { attributes } = await getData(slug);
  return (
    <main>
      <Container>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 p-5 xl:h-[60vh]">
          <section className="flex items-center xl:justify-end justify-center">
            <div className="relative h-[300px] w-[300px] rounded-full overflow-hidden">
              <Image
                className="object-cover"
                style={{ objectPosition: "0px 0px" }}
                src={attributes.Profile.data.attributes.url}
                fill
                alt={attributes.Name}
              />
            </div>
          </section>
          <section className="flex items-center">
            <div>
              <h3 className="xl:text-left text-center capitalize text-xl group-hover:underline mb-1">
                {attributes.Name}
              </h3>
              <p className="xl:text-left text-center capitalize text-sm mb-2">
                {attributes.Position}
              </p>

              <p className="xl:text-left text-center text-sm">
                {attributes.Description}
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}

async function getData(slug: string) {
  const blog = await strapi.find<any>("teams", {
    populate: ["*", "Profile"],
    filters: {
      slug: slug,
    },
  });
  return blog.data[0];
}

export async function generateStaticParams() {
  const slugs = await strapi.find<any>("teams", {
    fields: ["id", "slug"],
  });

  return slugs.data.map((post: any) => ({
    slug: post.attributes.slug,
  }));
}
