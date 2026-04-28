"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Briefcase, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: "gentech",
    role: "Flutter Developer",
    company: "Gentech",
    date: "2026–Present",
    color: "neon-cyan",
    responsibilities: [
      "Leading development of high-impact cross-platform solutions focusing on Clean Architecture and performance.",
      "Mastering end-to-end release management via App Store Connect and Google Play Console for global scale.",
      "Architecting interactive features with custom animations and optimized rendering using Impeller for multi-platform delivery.",
      "Driving excellence through automated testing, CI/CD pipelines, and rigorous code reviews in an AI-forward environment."
    ]
  },
  {
    id: "freelancing",
    role: "Flutter Developer",
    company: "Freelancing",
    date: "2023–2025",
    color: "neon-purple",
    responsibilities: [
      "Delivered complex systems including Koll App and Darcy.",
      "Managed end-to-end development from Figma to deployment.",
      "Specialized in high-fidelity UI implementation and custom backend integrations."
    ]
  },
  {
    id: "teqneesa",
    role: "Flutter Developer",
    company: "Teqnee-sa",
    date: "2022–2023",
    color: "neon-pink",
    responsibilities: [
      "Developed Snaydi and Occasion Master.",
      "Managed UI/UX redesigns and resolved critical build conflicts.",
      "Ensured stable releases and handled app store compliance and deployment for large-scale Saudi Arabian market apps."
    ]
  }
];

export function Experience() {
  const [expandedIds, setExpandedIds] = useState<string[]>(experiences.map(exp => exp.id));

  return (
    <section id="experience" className="py-24 px-6 container mx-auto max-w-6xl relative overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-14">
          <div className="p-3 bg-neon-purple/10 rounded-xl border border-neon-purple/20">
            <Briefcase className="text-neon-purple" size={24} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold whitespace-nowrap">SYSTEM.EXPERIENCE</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neon-purple/50 to-transparent ml-4" />
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-glass-border transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedIds.includes(exp.id);
              
              return (
                <motion.div 
                  key={exp.id} 
                  initial={false}
                  className={cn("relative flex flex-col md:flex-row items-center", isEven ? "md:flex-row-reverse" : "")}
                >
                  {/* Timeline Dot */}
                  <div className={cn(
                    "absolute left-[-4px] md:left-1/2 w-4 h-4 rounded-full border-2 border-primary bg-text-main transform md:-translate-x-1/2 z-10 transition-colors duration-300",
                    isExpanded ? `bg-${exp.color} shadow-[0_0_15px_var(--color-${exp.color})] hidden md:block` : "bg-glass-border hidden md:block"
                  )} />
                  {/* Timeline Dot Mobile */}
                  <div className={cn(
                    "absolute left-[-32px] w-4 h-4 rounded-full border-2 border-primary bg-text-main z-10 transition-colors duration-300 md:hidden",
                    isExpanded ? `bg-${exp.color} shadow-[0_0_15px_var(--color-${exp.color})]` : "bg-glass-border"
                  )} />

                  <div className={cn("w-full md:w-1/2", isEven ? "md:pl-12" : "md:pr-12")}>
                    <GlassCard 
                      glowOnHover 
                      className={`cursor-pointer transition-all ${isExpanded ? `border-${exp.color}/50` : ''}`}
                      onClick={() => {
                        setExpandedIds(prev => 
                          prev.includes(exp.id) 
                            ? prev.filter(id => id !== exp.id) 
                            : [...prev, exp.id]
                        );
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-${exp.color} font-mono text-sm`}>{exp.date}</span>
                        <ChevronRight className={cn(
                          "transition-transform duration-300",
                          isExpanded ? "rotate-90 text-white" : "text-text-muted"
                        )} size={20} />
                      </div>
                      <h3 className="text-2xl font-bold font-heading">{exp.company}</h3>
                      <h4 className="text-text-secondary font-medium mb-4">{exp.role}</h4>
                      
                      <motion.div 
                        initial={false}
                        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-glass-border flex flex-col gap-3">
                          {exp.responsibilities.map((resp, i) => (
                            <div key={i} className="flex gap-3 text-text-secondary/80 text-sm md:text-base">
                              <span className={`text-${exp.color} mt-1`}>{'>'}</span>
                              <p>{resp}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
