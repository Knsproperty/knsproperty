import Container from "@/blocks/atoms/container";
import Teams from "@/blocks/sections/teams";

export default function About() {
  return (
    <main>
      <Container>
        <h1 className="text-4xl font-semibold text-center py-10">
          Our Leadership
        </h1>
        <section className="flex gap-5 items-center justify-center flex-wrap">
          <Teams />
        </section>
      </Container>
    </main>
  );
}
