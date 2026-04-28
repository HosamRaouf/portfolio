"use client";

import { motion, useDragControls } from "framer-motion";
import { Terminal, Mail, Palette, Phone } from "lucide-react";
import { NeonButton } from "../ui/NeonButton";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const BehanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8.228 15.01c-1.293.003-2.188-.415-2.687-1.254h-.056v1.108H2.571V3.414h2.914v4.434h.056c.5-.839 1.394-1.254 2.687-1.251 1.944 0 3.518 1.573 3.518 3.518v1.378c0 1.943-1.574 3.518-3.518 3.518zm-.446-5.834c-1.077 0-1.95.872-1.95 1.949v.766c0 1.076.873 1.949 1.95 1.949 1.076 0 1.948-.873 1.948-1.949v-.766c0-1.077-.872-1.949-1.948-1.949zm13.639 5.834c-2.585 0-4.68-2.095-4.68-4.68v-.613c0-2.585 2.095-4.68 4.68-4.68s4.68 2.095 4.68 4.68v.613c0 2.585-2.095 4.68-4.68 4.68zm0-7.394c-1.498 0-2.713 1.215-2.713 2.713v.614c0 1.497 1.215 2.712 2.713 2.712s2.713-1.215 2.713-2.712v-.614c0-1.498-1.215-2.713-2.713-2.713zM18.151 7.238h6.241V6.13H18.151v1.108z"/></svg>
);

export function Contact() {
  const dragControls = useDragControls();

  return (
    <section id="contact" className="py-24 px-6 container mx-auto max-w-4xl relative overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        drag
        dragControls={dragControls}
        dragListener={false}
        dragMomentum={false}
        className="glass-card p-1 top-0 relative z-50"
      >
        <div className="bg-primary/95 rounded-[22px] overflow-hidden cursor-auto">
          <div 
            onPointerDown={(e) => dragControls.start(e)}
            className="bg-secondary px-4 py-3 flex items-center gap-2 border-b border-glass-border cursor-grab active:cursor-grabbing select-none"
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-text-muted">
              connect@hosam.dart ~ /bin/bash
            </div>
            <Terminal size={14} className="text-text-muted" />
          </div>

          <div className="p-8 md:p-12 font-mono">
            <h2 className="text-2xl md:text-5xl font-heading font-bold mb-6 text-white text-center">
              INITIATE <span className="text-neon-cyan glow-text-cyan">HANDSHAKE</span>
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-lg mx-auto">
              Currently open for new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
            </p>

            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a href="mailto:sekraof@gmail.com" className="w-full md:w-auto">
                  <NeonButton variant="cyan" className="w-full justify-center">
                    <Mail className="mr-2" size={18} />
                    Ping_Email
                  </NeonButton>
                </a>
                <a href="tel:+201121432553" className="w-full md:w-auto">
                  <NeonButton variant="purple" className="w-full justify-center">
                    <Phone className="mr-2" size={18} />
                    +201121432553
                  </NeonButton>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://github.com/HosamRaouf" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-text-muted hover:text-neon-purple hover:border-neon-purple transition-all hover:shadow-[0_0_15px_rgba(122,95,255,0.4)]">
                  <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/hosamraouf/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-text-muted hover:text-neon-cyan hover:border-neon-cyan transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                  <LinkedinIcon />
                </a>
                <a href="https://www.behance.net/hosamabdel-" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-text-muted hover:text-neon-pink hover:border-neon-pink transition-all hover:shadow-[0_0_15px_rgba(255,46,136,0.4)]">
                  <BehanceIcon />
                </a>
                <a href="https://instagram.com/raouf.2" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-text-muted hover:text-orange-400 hover:border-orange-400 transition-all hover:shadow-[0_0_15px_rgba(251,146,60,0.4)]">
                  <InstagramIcon />
                </a>
                <a href="https://facebook.com/HRAOUF2.0" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-text-muted hover:text-blue-500 hover:border-blue-500 transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <FacebookIcon />
                </a>
                <a href="https://wa.me/201121432553" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-text-muted hover:text-green-500 hover:border-green-500 transition-all hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                  <WhatsappIcon />
                </a>
              </div>
            </div>
            
            <div className="mt-16 text-center text-xs text-text-muted">
              <span className="text-neon-pink mr-1">{'>'}</span> SYSTEM_STATUS: ONLINE & READY FOR DEPLOYMENT
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
