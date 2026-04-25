"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface ImageViewerProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageViewer({ src, alt, isOpen, onClose }: ImageViewerProps) {
  if (!isOpen || !src) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-zoom-out"
        />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-3 bg-black/40 rounded-full backdrop-blur-md"
        >
          <X size={28} />
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl h-full flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-full h-[85vh] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.1)] pointer-events-auto">
            <Image 
              src={src} 
              alt={alt} 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
