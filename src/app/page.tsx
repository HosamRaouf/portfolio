import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 text-center border-t border-white/5 font-mono text-sm text-text-muted mt-20">
        <p>&copy; {new Date().getFullYear()} Hosam Abd ElRaouf Mohamed. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
