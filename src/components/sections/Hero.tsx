"use client";

import { motion } from "framer-motion";
import { NeonButton } from "../ui/NeonButton";
import { Code, Cpu, Download } from "lucide-react";
import { CodeParticles } from "../ui/CodeParticles";
import Image from "next/image";
import { projectsData } from "./Projects";
import { getAssetPath } from "@/utils/paths";

export function Hero() {
  const HeroImage = (
    <motion.div 
      className="relative z-20 group cursor-pointer"
      animate={{ 
        y: [0, -15, 0],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
    >
      <div className="absolute -inset-16 bg-neon-cyan/20 rounded-full blur-[100px] group-hover:bg-neon-cyan/30 transition-colors duration-700 animate-pulse" />
      <div className="absolute -inset-8 bg-neon-purple/10 rounded-full blur-[60px]" />
      
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full border-2 border-neon-cyan/40 p-3 bg-glass-dark backdrop-blur-xl shadow-[0_0_80px_rgba(0,240,255,0.15)] overflow-hidden">
        <Image 
          src={getAssetPath("/assets/1714351292466.jpg")} 
          alt="Hosam" 
          fill 
          priority
          sizes="(max-width: 768px) 192px, 288px"
          className="object-cover rounded-full scale-110 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      
      {/* Pulsing Tag */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-neon-cyan/30 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_#00F0FF]" />
        <span className="text-xs font-mono text-neon-cyan uppercase tracking-widest">HOSAM.RAOUF</span>
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 pb-12 px-6 container mx-auto max-w-6xl overflow-hidden">
      <CodeParticles />
      <div className="absolute top-1/4 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10 w-full">

        {/* LEFT — Identity + Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex items-center gap-3 text-neon-cyan font-mono text-sm mb-8"
          >
            <Cpu size={16} />
            <span>SYSTEM.ONLINE</span>
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          </motion.div>

          {/* MOBILE IMAGE: Below System Online, Above Name */}
          <div className="lg:hidden mb-16 mt-4">
            {HeroImage}
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-tight mb-6">
            <span className="block text-white">HOSAM</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">ABD ELRAOUF</span>
          </h1>

          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-text-secondary mb-6">
            Senior <span className="text-white font-bold">Flutter</span> Developer
          </h2>

          <p className="text-text-muted text-sm md:text-base max-w-lg mb-10 leading-relaxed px-4 lg:px-0">
            Architecting high-performance, visually-driven cross-platform applications. Specialist in Clean Architecture, Impeller Engine optimization, and AI-integrated UIs.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto items-center justify-center lg:justify-start">
            <NeonButton variant="cyan" className="w-full sm:w-auto" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              <Code className="mr-2 h-5 w-5" /> View Projects
            </NeonButton>
            <NeonButton variant="pink" className="w-full sm:w-auto" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </NeonButton>
            <a href={getAssetPath("/assets/cv.pdf")} download className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 text-text-secondary font-mono text-sm font-bold hover:bg-white/5 hover:text-white transition-all duration-300">
              <Download size={16} /> Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Hero Image (DESKTOP ONLY) */}
        <div className="hidden lg:flex relative h-[600px] items-center justify-center overflow-visible">
          {HeroImage}
        </div>
      </div>
    </section>
  );
}
