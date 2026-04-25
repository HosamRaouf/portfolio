"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { User, Activity } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 container mx-auto max-w-6xl relative overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-neon-cyan/10 rounded-xl border border-neon-cyan/20">
            <User className="text-neon-cyan" size={24} />
          </div>
          <h2 className="text-4xl font-heading font-bold">SYSTEM.ABOUT</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/50 to-transparent ml-4" />
        </div>

        <GlassCard glowOnHover className="max-w-4xl border-neon-cyan/20 px-8 py-10">
          <div className="absolute top-0 left-0 w-1 rounded-l-[24px] h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent opacity-50" />
          
          <div className="flex items-center gap-2 mb-6 text-neon-pink font-mono text-sm">
            <Activity size={16} />
            <span>PROFILE_DIAGNOSTIC_COMPLETE</span>
          </div>

          <p className="text-lg md:text-xl text-text-main leading-relaxed font-body">
            Senior <span className="text-white font-bold glow-text-cyan">Flutter Developer</span> with 5+ years of expertise in architecting high-performance, visually-driven cross-platform applications. 
            Specialist in <span className="text-neon-cyan">Clean Architecture</span>, <span className="text-neon-purple">Impeller Engine optimization</span>, and <span className="text-neon-pink">AI-integrated UIs</span> featuring custom <span className="text-white border-b border-neon-pink">Rive animations</span>. 
            <br/><br/>
            Expert in the full mobile release lifecycle, including advanced management of App Store Connect and Google Play Console for global deployments, compliance, and automated metadata optimization. 
            Focused on delivering technical excellence through robust system design and high-fidelity interactive solutions.
          </p>
        </GlassCard>
      </motion.div>
    </section>
  );
}
