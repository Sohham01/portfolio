"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Currently } from "@/components/Currently";
import { BuildLog } from "@/components/BuildLog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { CommandMenu } from "@/components/CommandMenu";

export default function Home() {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  return (
    <div className="relative bg-[#08090B] text-[#F3F4F6] min-h-screen">
      <CustomCursor />

      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
      />

      <Navbar onOpenCommandMenu={() => setCommandMenuOpen(true)} />

      <main className="relative z-10">
        <Hero />
        <ProjectShowcase />
        <About />

        <section className="py-20 sm:py-28 relative section-divider">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-6">
                <Experience />
              </div>
              <div className="lg:col-span-6">
                <Currently />
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <BuildLog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
