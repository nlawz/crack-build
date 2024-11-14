"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

type Props = { href: string; label: string; external?: boolean };

export const DesktopNavLink: React.FC<Props> = ({ href, label, external }) => {
  const segment = useSelectedLayoutSegment();
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      className={cn("text-white/50 hover:text-white/90 duration-200 text-sm tracking-[0.07px]", {
        "text-white": href.startsWith(`/${segment}`),
      })}
    >
      {label}
    </Link>
  );
};

export function MobileNavLink({
  href,
  label,
  onClick,
}: { href: string; label: string; external?: boolean; onClick: () => void }) {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();

  return (
    <Link
      href={href}
      className={cn(
        "text-white/50 hover:text-white duration-200 text-lg font-medium tracking-[0.07px] py-3 block w-full text-left",
        {
          "text-white": href.startsWith(`/${segment}`),
        }
      )}
      onClick={(e) => {
        e.preventDefault();
        onClick();
        router.push(href);
      }}
    >
      {label}
    </Link>
  );
}
