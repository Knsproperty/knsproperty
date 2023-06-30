import Container from "@/blocks/atoms/container"
import team from "../../../../sample/team.json"
import TeamCard from "@/blocks/molecules/cards/team-card"

export default function About() {
    return (
        <main>
            <Container>
                <h1 className="text-4xl font-semibold text-center py-10">Our Leadership</h1>
                <section className="flex gap-5 items-center justify-center flex-wrap">
                    {team.members.map((member, index) => <TeamCard key={index} name={member.name} slug={member.slug} image={member.image} role={member.role} />)}
                </section>
            </Container>
        </main>
    )
}



