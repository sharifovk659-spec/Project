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
      width={180}
      height={72}
      priority={priority}
      className={cn("h-10 w-auto object-contain sm:h-12", className)}
    />
  );
}
