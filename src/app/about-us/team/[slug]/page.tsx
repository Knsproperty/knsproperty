import member from "../../../../../sample/team.json"
import Container from "@/blocks/atoms/container";
import Image from "next/image";

export default async function Page({ params: { slug } }: any) {
    const data = await getData(slug)
    return (
        <main>
            <Container>



                <div className="grid lg:grid-cols-[1fr_2fr] gap-10 p-5 xl:h-[60vh]">


                    <section className="flex items-center xl:justify-end justify-center" >

                        <div className="relative h-[300px] w-[300px]  rounded-full overflow-hidden">

                            <Image src={data.image} fill alt={data.name} />


                        </div>




                    </section>
                    <section className="flex items-center" >
                        <div>
                            <h3 className="xl:text-left text-center capitalize text-xl group-hover:underline mb-1">{data.name}</h3>
                            <p className="xl:text-left text-center capitalize text-sm mb-2">{data.role}</p>

                            <p className="xl:text-left text-center text-sm font-light">{data.about}</p>
                        </div>
                    </section>


                </div>


            </Container>
        </main>
    )

}


async function getData(slug: string) {
    const data = member.members.filter((mem) => mem.slug === slug);
    return data[0]

}