"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Loader2 } from "lucide-react";

interface SafeImageProps extends ImageProps {
  containerClassName?: string;
}

export function SafeImage({ containerClassName, ...props }: SafeImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${containerClassName || ""}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm animate-pulse z-10">
          <Loader2 className="w-6 h-6 text-neon-cyan animate-spin opacity-50" />
        </div>
      )}
      <Image
        {...props}
        onLoad={() => setIsLoading(false)}
        className={`transition-all duration-700 ease-out ${
          isLoading ? "scale-110 blur-xl opacity-0" : "scale-100 blur-0 opacity-100"
        } ${props.className || ""}`}
      />
    </div>
  );
}
