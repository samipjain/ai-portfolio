import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Press } from "@/components/press";
import { Talks } from "@/components/talks";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Press />
      <Talks />
    </>
  );
}
