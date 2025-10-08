"use client";

import { cn } from "@/lib/utils";

export function ImageFrame({ children, className, aspectRatio = "aspect-video" }) {
  return (
    <div className="relative bg-[#4e3d0e] overflow-hidden rounded-2xl">
      <div className="p-3 h-full bg-gradient-to-br from-[#fea900]/10 to-[#4e3d0e]/10 rounded-2xl">
        <div className={cn(
          "relative h-full overflow-hidden rounded-xl",
          aspectRatio,
          className
        )}>
          {children}
        </div>
      </div>
    </div>
  );
}
