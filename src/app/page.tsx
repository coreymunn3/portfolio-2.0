import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
