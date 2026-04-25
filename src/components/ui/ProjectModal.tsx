import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, MonitorSmartphone } from "lucide-react";
import Image from "next/image";
import { NeonButton } from "./NeonButton";
import { SafeImage } from "./SafeImage";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
  onImageClick?: (url: string) => void;
}

export function ProjectModal({ project, isOpen, onClose, onImageClick }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#05070D]/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-secondary/80 backdrop-blur-[30px] border border-glass-border shadow-[0_0_30px_rgba(255,46,136,0.15)] rounded-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Hero Banner Section (Now Logo Centric) */}
          <div className="relative w-full h-40 md:h-56 flex-shrink-0 bg-[#05070D] flex items-center justify-center p-8 border-b border-glass-border">
            {project.logo ? (
              <div className="relative w-32 h-32 opacity-90 drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                <SafeImage src={project.logo} alt={`${project.title} logo`} fill containerClassName="w-full h-full" className="object-contain" priority />
              </div>
            ) : (
               <div className="w-full h-full bg-gradient-to-br from-primary to-neon-pink/20" />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
          </div>

          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10 p-2 bg-black/20 rounded-full backdrop-blur-md"
          >
            <X size={24} />
          </button>

          {/* Scrollable Content Section */}
          <div className="p-6 md:p-10 overflow-y-auto relative z-10 flex-grow">
            <div className="flex items-center gap-3 mb-4 text-neon-pink font-mono text-sm">
              <MonitorSmartphone size={16} />
              <span>PROJECT_DETAILS</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white glow-text-pink drop-shadow-md">
                {project.title}
              </h2>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-text-main mb-2">Description</h3>
                <p className="text-text-secondary leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-text-main mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex gap-2 text-text-secondary">
                      <span className="text-neon-cyan mt-1">»</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Screenshots Gallery */}
              {project.images && project.images.length > 0 && (
                <div className="pt-6 border-t border-glass-border">
                  <h3 className="text-xl font-bold font-heading text-text-main mb-4">Screenshots Gallery</h3>
                  <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                    {project.images.map((img: string, idx: number) => (
                      <div 
                        key={idx} 
                        className="relative w-[140px] h-[250px] flex-shrink-0 rounded-xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all cursor-zoom-in snap-center"
                        onClick={() => onImageClick?.(img)}
                      >
                        <SafeImage src={img} alt={`Gallery ${idx}`} fill containerClassName="w-full h-full" className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold font-heading text-text-main mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, idx: number) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neon-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-text-main mb-4">External Links</h3>
                <div className="flex flex-col gap-4">
                  {project.links.map((link: any, idx: number) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="group p-3 rounded-lg border border-glass-border bg-black/20 hover:bg-white/5 hover:border-neon-pink/50 transition-all flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2 text-white">
                        {link.type === 'github' ? <GithubIcon /> : <ExternalLink size={16} />}
                        <span className="font-bold font-heading">{link.label}</span>
                      </div>
                      <span className="text-xs font-mono text-neon-cyan/70 truncate">{link.url}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
