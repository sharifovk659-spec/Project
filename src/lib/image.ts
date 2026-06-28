/** Unified image quality — same compression across the site. */
export const IMAGE_QUALITY = 90 as const;

/** Higher quality for team portraits and hero banners. */
export const IMAGE_QUALITY_HIGH = 95 as const;

/** Accurate `sizes` values so Next.js serves sharp images on mobile. */
export const IMAGE_SIZES = {
  hero: "(max-width: 768px) 120vw, (max-width: 1280px) 100vw, 1920px",
  fullWidth: "(max-width: 1024px) 100vw, 640px",
  halfColumn: "(max-width: 1024px) 100vw, 560px",
  showreel: "(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1400px",
  teamGroup: "(max-width: 1024px) 100vw, 800px",
  teamPortrait:
    "(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 34vw, 400px",
  teamPortraitHigh: "(max-width: 1023px) 100vw, 400px",
  teamFeaturedGrid: "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 640px",
  teamGalleryGrid: "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 420px",
  teamGallerySlide: "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 420px",
  handshakeBanner: "(max-width: 1024px) 100vw, 1280px",
  footer: "(max-width: 1280px) 200px, 220px",
  partner: "(max-width: 639px) 160px, (max-width: 1023px) 200px, 260px",
} as const;

/** Source files smaller than ~500px — serve original bytes, cap mobile display width. */
export const LOW_RES_TEAM_WIDTH = 215;
