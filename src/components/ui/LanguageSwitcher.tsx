import { useLocale } from "@/components/providers/LocaleProvider";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-gold/25 bg-background/40 p-0.5 backdrop-blur-sm",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code as Locale)}
          className={cn(
            "min-w-[2rem] rounded-full px-2 py-1 text-[10px] font-medium tracking-wider uppercase transition-colors sm:text-[11px]",
            locale === code ? "bg-gold/20 text-gold" : "text-beige-muted hover:text-beige",
          )}
        >
          {LOCALE_LABELS[code as Locale]}
        </button>
      ))}
    </div>
  );
}
