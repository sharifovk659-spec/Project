/** Unified image quality — same compression across the site. */
export const IMAGE_QUALITY = 90 as const;

/** Higher quality for selected team portraits (team-2, team-4). */
export const IMAGE_QUALITY_HIGH = 95 as const;

/** Accurate `sizes` values so Next.js serves sharp images on mobile. */
export const IMAGE_SIZES = {
  hero: "(max-width: 768px) 120vw, (max-width: 1280px) 100vw, 1920px",
  fullWidth: "(max-width: 1024px) 100vw, 640px",
  halfColumn: "(max-width: 1024px) 100vw, 560px",
  showreel: "(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1400px",
  teamGroup: "(max-width: 1024px) 100vw, 640px",
  teamPortrait:
    "(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 34vw, 240px",
  teamPortraitHigh: "(max-width: 1023px) 100vw, 280px",
  footer: "(max-width: 1280px) 200px, 220px",
  partner: "(max-width: 640px) 140px, (max-width: 1024px) 160px, 180px",
} as const;

/** Source files smaller than ~500px — serve original bytes, cap mobile display width. */
export const LOW_RES_TEAM_WIDTH = 215;
