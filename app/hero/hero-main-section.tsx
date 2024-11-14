"use client"
import Link from "next/link";
import { PrimaryButton } from "@/components/button-key";
import { File } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

function CopyCommand() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
        "npx shadcn add https://crack.build/replicate-sdxl"
    );
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative flex items-center justify-between w-full max-w-md mx-auto bg-black/30 rounded-lg border border-white/10 p-3 gap-4">
      <code className="text-sm text-white/70 break-all">npx shadcn add https://crack.build/replicate-sdxl</code>
      <button 
        onClick={handleCopy}
        className="shrink-0 px-2 py-1 text-xs text-white/50 hover:text-white/90 transition-all duration-200 relative"
      >
        <span className={cn(
          "inline-block transition-all duration-200",
          isCopied ? "scale-95 opacity-0" : "scale-100 opacity-100"
        )}>
          Copy
        </span>
        <span className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-200",
          isCopied ? "scale-100 opacity-100" : "scale-105 opacity-0"
        )}>
          Copied!
        </span>
      </button>
    </div>
  );
}

export function HeroMainSection() {
    return (
        <div className="container flex flex-col items-center px-4 pt-12 pb-8">
            <div className="text-center max-w-3xl mx-auto">
                <FadeInStagger>
                    <FadeIn>
                        <h1 className="bg-gradient-to-br text-transparent bg-clip-text from-white via-white via-30% to-white/30 text-[32px] sm:text-[56px] font-medium tracking-tighter">
                            A registry for developers to rapidly build their next product.
                        </h1>
                    </FadeIn>
                    <FadeIn>
                        <p className="mt-4 text-white/70 text-balance text-sm sm:text-base">
                            Focus more on the product, less on the code.
                            crack.build will get you up and running quickly.
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <div className="mt-6">
                            <CopyCommand />
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="mt-6 mb-8 flex justify-center">
                            <Link href="/docs">
                                <PrimaryButton
                                    shiny
                                    IconLeft={File}
                                    label="Start building"
                                    className="h-10"
                                />
                            </Link>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-white/10">
                            <Image
                                src="/hero.png"
                                alt="Hero image"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </FadeIn>
                </FadeInStagger>
            </div>
        </div>
    );
}
