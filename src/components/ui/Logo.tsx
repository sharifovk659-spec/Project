import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo-eterna.png"
      alt="ETERNA Production"
      width={240}
      height={96}
      priority={priority}
      className={cn("h-12 w-auto object-contain sm:h-14", className)}
    />
  );
}
