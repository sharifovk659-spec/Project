export interface ProductionItem {
  title: string;
  slug: string;
  image: string;
  /** YouTube or Vimeo watch URL */
  videoUrl: string;
}

export const PRODUCTION_ITEMS: ProductionItem[] = [
  {
    title: "Promo Video",
    slug: "promo-video",
    image: "/images/production/promo-video.jpg",
    videoUrl: "https://vimeo.com/1203444744",
  },
  {
    title: "Food Video",
    slug: "food-video",
    image: "/images/production/food-video.jpg",
    videoUrl: "https://vimeo.com/1203445520",
  },
  {
    title: "Commercial",
    slug: "commercial",
    image: "/images/production/commercial.jpg",
    videoUrl: "https://vimeo.com/1203448058",
  },
  {
    title: "Event",
    slug: "event",
    image: "/images/production/event.jpg",
    videoUrl: "https://vimeo.com/1203445306",
  },
  {
    title: "Drone",
    slug: "drone",
    image: "/images/production/drone.jpg",
    videoUrl: "https://vimeo.com/1203444744",
  },
  {
    title: "Podcast",
    slug: "podcast",
    image: "/images/production/podcast.jpg",
    videoUrl: "https://vimeo.com/1203445306",
  },
];
