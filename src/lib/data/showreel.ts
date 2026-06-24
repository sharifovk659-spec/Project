export interface ShowreelVideo {
  id: string;
  title: string;
  poster: string;
}

export const SHOWREEL_VIDEOS: ShowreelVideo[] = [
  {
    id: "1203445520",
    title: "Kimchi Tracking",
    poster: "/images/showreel/kimchi.jpg",
  },
  {
    id: "1203445306",
    title: "Sapphire",
    poster: "/images/showreel/sapphire.jpg",
  },
  {
    id: "1203444744",
    title: "Talifa Reels Obzor",
    poster: "/images/showreel/talifa.jpg",
  },
  {
    id: "1203448058",
    title: "Nishman Black Packshot",
    poster: "/images/showreel/nishman.jpg",
  },
];

export function vimeoEmbedUrl(id: string, autoplay = false) {
  const params = new URLSearchParams({
    title: "0",
    byline: "0",
    portrait: "0",
    dnt: "1",
    ...(autoplay ? { autoplay: "1" } : {}),
  });
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}
