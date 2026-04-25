"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { FolderGit2 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ProjectModal } from "../ui/ProjectModal";
import { ImageViewer } from "../ui/ImageViewer";
import { getAssetPath } from "@/utils/paths";

export const projectsData = [
  {
    id: "scoutx",
    title: "ScoutX Pro",
    shortDesc: "ScoutX Pro is the ultimate football talent discovery platform.",
    logo: "/assets/scoutx/logo.png",
    images: [
      "/assets/scoutx/scsh.jpg",
      "/assets/scoutx/Screenshot 2026-04-23 at 2.08.53 PM.png",
      "/assets/scoutx/Screenshot 2026-04-23 at 2.09.16 PM.png",
      "/assets/scoutx/Screenshot 2026-04-23 at 2.09.57 PM.png",
      "/assets/scoutx/Screenshot 2026-04-23 at 2.10.35 PM.png"
    ],
    description: "A comprehensive cross-platform mobile application featuring an interactive AI search system, custom Rive animations, and integrated video components. Optimized Deep Linking logic and managed the full release cycle via App Store Connect and Google Play Console.",
    features: ["Interactive AI Search UI", "Custom Rive Animations", "Video Component Integration", "Deep Linking Optimization", "Full Store Release Management"],
    tech: ["Flutter", "Dart", "Rive", "Clean Architecture", "Deep Linking", "App Store Connect", "Google Play Console", "REST API"],
    links: [
      { type: "apple", url: "https://apps.apple.com/ly/app/scoutx-pro/id6503641256", label: "App Store" },
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.scoutx.scoutxpro", label: "Google Play" }
    ]
  },
  {
    id: "alajlan",
    title: "Alajlan & AlEid",
    shortDesc: "Alajlan family community app refactored with Clean Architecture and Firebase migration.",
    logo: "/assets/ajlan/LOGO.svg",
    images: [
      "/assets/ajlan/Screenshot_20260128-183929.jpg",
      "/assets/ajlan/Screenshot_20260128-183933.jpg",
      "/assets/ajlan/Screenshot_20260128-183941.jpg",
      "/assets/ajlan/Screenshot_20260128-184135.jpg",
      "/assets/ajlan/Screenshot_20260128-204032.jpg"
    ],
    description: "Executed a full project refactor using Clean Architecture and modern state management (Bloc). Migrated the entire infrastructure to a new Firebase project and implemented custom notification systems for improved user engagement.",
    features: ["Full Clean Architecture Refactor", "Bloc State Management", "Firebase Infrastructure Migration", "Custom Push Notification System", "App Store & Play Store Compliance"],
    tech: ["Flutter", "Dart", "Bloc", "Clean Architecture", "Firebase", "Firebase Cloud Messaging", "Secure Storage", "REST API"],
    links: [
      { type: "apple", url: "https://apps.apple.com/ar/app/alajlan-aleid/id6444187059", label: "App Store" },
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.dimofinff.elajlan2", label: "Google Play" }
    ]
  },
  {
    id: "koll",
    title: "Koll App",
    shortDesc: "Full restaurant ecosystem: user app, owner dashboard — full UI/UX design and development from scratch.",
    logo: "/assets/koll/logo.png",
    images: [
      "/assets/koll/Screenshot 2026-04-23 at 2.04.46 PM.png",
      "/assets/koll/Screenshot 2026-04-23 at 2.04.53 PM.png",
      "/assets/koll/Screenshot 2026-04-23 at 2.05.00 PM.png",
      "/assets/koll/Screenshot 2026-04-23 at 2.05.05 PM.png",
      "/assets/koll/Screenshot 2026-04-23 at 2.05.28 PM.png"
    ],
    description: "Developed a complete restaurant ordering ecosystem from scratch including a user-facing app and a custom dashboard for owners. Implemented real-time order tracking, driver management, and complex state synchronization across multiple roles.",
    features: ["Real-time Order Tracking", "Driver Management System", "Owner Dashboard", "Complex Multi-role State Sync", "Google Maps Integration"],
    tech: ["Flutter", "Dart", "GetX", "Google Cloud Maps", "Geolocation", "Geocoding", "Firebase", "WebSockets", "REST API"],
    links: [
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.raouf.koll", label: "Google Play" },
      { type: "behance", url: "https://www.behance.net/gallery/199659121/-Koll", label: "Case Study" }
    ]
  },
  {
    id: "awlad",
    title: "Awlad Megahed",
    shortDesc: "Hand-tools e-commerce platform — full UI/UX design and development from scratch.",
    logo: "/assets/awladmegahed/logo.jpg",
    images: [
      "/assets/awladmegahed/IMG-20250306-WA0024.jpg",
      "/assets/awladmegahed/IMG-20250306-WA0028.jpg",
      "/assets/awladmegahed/IMG-20250306-WA0032.jpg",
      "/assets/awladmegahed/IMG-20250306-WA0033.jpg",
      "/assets/awladmegahed/IMG-20250306-WA0034.jpg"
    ],
    description: "Designed and developed a hand-tools e-commerce platform from the ground up, handling both UI/UX design and code implementation. Integrated complex ordering logic and product filtering systems to enhance the shopping experience.",
    features: ["Full UI/UX Design (Figma)", "Complex Ordering Logic", "Advanced Product Filtering", "Admin Dashboard Integration", "Scalable Architecture"],
    tech: ["Flutter", "Dart", "Provider", "Figma", "REST API", "Firebase", "Dio", "Clean Architecture"],
    links: [
      { type: "github", url: "https://github.com/HosamRaouf/awlad_megahed_user", label: "GitHub" }
    ]
  },
  {
    id: "darcy",
    title: "Darcy",
    shortDesc: "Fashion e-commerce with high-fidelity UI and Node.js backend integration — full UI/UX design and development from scratch.",
    logo: "/assets/darcy/LOGO.png",
    images: [
      "/assets/darcy/Screenshot 2026-04-23 at 2.01.33 PM.png",
      "/assets/darcy/Screenshot 2026-04-23 at 2.01.47 PM.png",
      "/assets/darcy/Screenshot 2026-04-23 at 2.02.00 PM.png",
      "/assets/darcy/Screenshot 2026-04-23 at 2.02.10 PM.png",
      "/assets/darcy/Screenshot 2026-04-23 at 2.02.25 PM.png"
    ],
    description: "Built a fashion e-commerce application integrated with a Node.js backend using Dio for network requests. Focused on modern, high-fidelity UI with smooth transitions, Lottie animations, and responsive layouts.",
    features: ["High-Fidelity UI Design", "Node.js Backend Integration via Dio", "Lottie Animations", "Smooth Screen Transitions", "Responsive Layout"],
    tech: ["Flutter", "Dart", "Dio", "Node.js (Backend)", "Lottie", "GetX", "Clean Architecture", "REST API"],
    links: [
      { type: "github", url: "https://github.com/HosamRaouf/darcy", label: "GitHub" }
    ]
  },
  {
    id: "daralmoshah",
    title: "Dar Almoshah",
    shortDesc: "Local logistics and order management system for Restaurants operations — full UI/UX design and development from scratch.",
    logo: "/assets/dar almoshah/338187291_179565161543772_2571310201586051857_n.jpg",
    images: [
    ],
    description: "Developed a local logistics and order management system to streamline internal operations. Focused on local data synchronization and a responsive interface tailored for warehouse management workflows.",
    features: ["Local Order Management", "Warehouse Interface", "Data Synchronization", "Responsive Operational UI"],
    tech: ["Flutter", "Dart", "SQLite", "Provider", "Clean Architecture"],
    links: []
  },
  {
    id: "occasionstation",
    title: "Occasion Station",
    shortDesc: "Saudi perfume store app — UI enhancement and store compliance upgrade.",
    logo: "",
    images: [],
    description: "Upgraded a Saudi perfume store app by fixing Gradle build errors and enhancing the visual design to improve user retention. Managed store compliance updates and UI/UX tweaks that improved conversion rates.",
    features: ["Gradle Error Resolution", "Visual Design Enhancement", "Store Compliance Management", "UX Conversion Optimization"],
    tech: ["Flutter", "Dart", "Android (Gradle)", "App Store Connect", "Google Play Console"],
    links: [
      { type: "web", url: "https://occasionstation.com/", label: "Website" }
    ]
  },
  {
    id: "snaydi",
    title: "Snaydi",
    shortDesc: "Multi-portal educational app for students, parents, and teachers.",
    logo: "/assets/snaydi/logo.jpg",
    images: [
      "/assets/snaydi/460x996bb.webp",
      "/assets/snaydi/460x996bb-1.webp",
      "/assets/snaydi/460x996bb-2.webp",
      "/assets/snaydi/460x996bb-3.webp"
    ],
    description: "Redesigned student, parent, and teacher portals for an educational platform in the Saudi market. Focused on intuitive navigation, improved accessibility, and performance optimizations for diverse user groups.",
    features: ["Multi-Portal Architecture (Student/Parent/Teacher)", "Intuitive Navigation Redesign", "Accessibility Improvements", "Saudi Market Compliance"],
    tech: ["Flutter", "Dart", "REST API", "Provider", "App Store Connect", "Google Play Console"],
    links: [
      { type: "apple", url: "https://apps.apple.com/om/app/snaydi/id1476991744", label: "App Store" },
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.tqnee.sanaydiparent", label: "Google Play" }
    ]
  },
  {
    id: "rocketship",
    title: "Rocketship",
    shortDesc: "Real-time chat with gamified UX and high-fidelity 2D Rive animations — full UI/UX design and development from scratch.",
    logo: "",
    images: [],
    description: "Built a real-time chat application with a focus on high-fidelity 2D animations using Rive, creating an interactive and gamified user experience. Experimented with custom interactive elements and real-time Firebase communication.",
    features: ["Real-time Chat (Firebase)", "High-Fidelity 2D Rive Animations", "Gamified UX Design", "Custom Interactive Elements", "High-Performance Rendering"],
    tech: ["Flutter", "Dart", "Rive", "Firebase Realtime Database", "Firebase Auth", "GetX", "Impeller"],
    links: [
      { type: "github", url: "https://github.com/HosamRaouf/rocketship", label: "GitHub" }
    ]
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [viewerImage, setViewerImage] = useState<string | null>(null);

  // Apply asset path prefix to all projects for GitHub Pages compatibility
  const projects = projectsData.map(p => ({
    ...p,
    logo: getAssetPath(p.logo),
    images: p.images.map(img => getAssetPath(img))
  }));

  // Listen for open-project events (from Hero)
  useEffect(() => {
    const handleOpen = (e: any) => {
      const project = projects.find(p => p.id === e.detail);
      if (project) setSelectedProject(project);
    };
    window.addEventListener('open-project', handleOpen);
    return () => window.removeEventListener('open-project', handleOpen);
  }, [projects]);

  return (
    <>
      <section id="projects" className="py-24 px-6 relative container mx-auto max-w-6xl overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex items-center gap-4"
        >
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-glass-border"></div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white text-center">
            CORE_SYSTEM_<span className="text-neon-cyan glow-text-cyan">PROJECTS</span>
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-glass-border"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <GlassCard glowOnHover className="h-full group hover:border-neon-pink/50 p-0 overflow-hidden flex flex-col relative w-full pb-6">

                {/* Hero Logo Banner — full bleed */}
                <div onClick={() => setSelectedProject(project)} className="cursor-pointer relative w-full h-[200px] bg-[#05070D] overflow-hidden">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      fill
                      className="object-contain p-8 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FolderGit2 size={64} className="text-neon-cyan opacity-30 group-hover:opacity-70 group-hover:text-neon-pink transition-colors" />
                    </div>
                  )}
                  {/* Subtle grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
                  {/* Bottom gradient fade into card body */}
                  <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-[#0A0F1C] to-transparent pointer-events-none" />
                  
                  {/* Click Hint */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded font-mono text-[10px] text-text-muted opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <span className="w-1 h-1 rounded-full bg-neon-cyan animate-pulse" />
                    DETAILS
                  </div>
                </div>

                {/* Content Section */}
                <div onClick={() => setSelectedProject(project)} className="px-6 pb-2 cursor-pointer relative z-10">
                  <h3 className="text-2xl font-bold font-heading mb-2 text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.shortDesc}</p>
                </div>

                {/* Autoscrolling Screenshots Carousel - 9:16 aspect ratio */}
                {project.images && project.images.length > 0 && (
                  <div className="w-full overflow-hidden my-4 py-2 border-y border-white/5 bg-[#0A0F1C]/50 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0A0F1C] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0A0F1C] to-transparent z-10 pointer-events-none" />
                    <motion.div
                      className="flex gap-4 px-4 w-max"
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                    >
                      {/* Duplicated images to make a seamless infinite marquee */}
                      {[...project.images, ...project.images].map((imgUrl, i) => (
                        <div
                          key={i}
                          className="relative w-[100px] h-[178px] flex-shrink-0 rounded-lg overflow-hidden border border-white/10 hover:border-neon-pink/70 transition-all cursor-zoom-in group/img"
                          onClick={(e) => { e.stopPropagation(); setViewerImage(imgUrl); }}
                        >
                          <Image src={imgUrl} alt={`Screenshot ${i}`} fill className="object-cover group-hover/img:scale-105 transition-transform duration-300" />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* Tech Tags + External Links row */}
                <div className="px-6 mt-auto pt-3 flex flex-col gap-3 relative z-10">
                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t: string, i: number) => (
                      <span key={i} className="text-xs font-mono text-text-muted px-2 py-0.5 rounded-full bg-white/5 border border-white/5">{t}</span>
                    ))}
                    {project.tech.length > 3 && <span className="text-xs font-mono text-text-muted">+{project.tech.length - 3}</span>}
                  </div>

                  {/* External Links */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-glass-border">
                    {project.links.map((link: any, i: number) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all duration-200 hover:scale-105"
                        style={
                          link.type === 'apple'
                            ? { borderColor: 'rgba(255,255,255,0.2)', color: '#e5e5ea', background: 'rgba(255,255,255,0.05)' }
                            : link.type === 'android'
                              ? { borderColor: 'rgba(61,220,132,0.4)', color: '#3DDC84', background: 'rgba(61,220,132,0.07)' }
                              : link.type === 'behance'
                                ? { borderColor: 'rgba(23,105,255,0.4)', color: '#1769FF', background: 'rgba(23,105,255,0.07)' }
                                : link.type === 'web'
                                  ? { borderColor: 'rgba(0,240,255,0.4)', color: '#00F0FF', background: 'rgba(0,240,255,0.07)' }
                                  : { borderColor: 'rgba(122,95,255,0.4)', color: '#7A5FFF', background: 'rgba(122,95,255,0.07)' }
                        }
                      >
                        {link.type === 'apple' && (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                        )}
                        {link.type === 'android' && (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341a4.49 4.49 0 0 1-4.49 4.49H10.97a4.49 4.49 0 0 1-4.49-4.49V8.58a4.49 4.49 0 0 1 4.49-4.49h2.063a4.49 4.49 0 0 1 4.49 4.49v6.761zM7.5 2.5L6 1M16.5 2.5L18 1M7 8h10" /></svg>
                        )}
                        {link.type === 'behance' && (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.726-3h3.543c-.168-1.78-1.225-2.114-1.783-2.114-.86 0-1.62.49-1.76 2.114zM13 22H6v-1.5h1.938V11h-3V9.5a15.946 15.946 0 0 0 3.822-.5H10v12.5H13V22zm-7.327-8.513C5.51 12.505 4.378 11 2 11H0V7h2c2.714 0 5.256 1.756 5.593 4.961.18 1.7-.148 3.296-.92 4.526z" /></svg>
                        )}
                        {link.type === 'web' && (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        )}
                        {link.type === 'github' && (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onImageClick={(imgUrl) => setViewerImage(imgUrl)}
      />
      <ImageViewer
        src={viewerImage!}
        alt="Full screen viewer"
        isOpen={!!viewerImage}
        onClose={() => setViewerImage(null)}
      />
    </>
  );
}
