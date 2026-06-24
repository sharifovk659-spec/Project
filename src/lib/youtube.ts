function isValidYouTubeId(id: string): boolean {
  return /^[\w-]{11}$/.test(id);
}

export function extractYouTubeId(urlOrId: string): string | null {
  const trimmed = urlOrId.trim();
  if (!trimmed) return null;

  if (isValidYouTubeId(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);

    if (url.hostname === "youtu.be" || url.hostname === "www.youtu.be") {
      const id = url.pathname.slice(1).split("/")[0];
      return id && isValidYouTubeId(id) ? id : null;
    }

    if (url.hostname.includes("youtube.com") || url.hostname.includes("youtube-nocookie.com")) {
      const fromQuery = url.searchParams.get("v");
      if (fromQuery && isValidYouTubeId(fromQuery)) return fromQuery;

      const parts = url.pathname.split("/").filter(Boolean);
      const embedIndex = parts.indexOf("embed");
      if (embedIndex >= 0) {
        const id = parts[embedIndex + 1];
        if (id && isValidYouTubeId(id)) return id;
      }

      const shortsIndex = parts.indexOf("shorts");
      if (shortsIndex >= 0) {
        const id = parts[shortsIndex + 1];
        if (id && isValidYouTubeId(id)) return id;
      }
    }
  } catch {
    return null;
  }

  return null;
}

export function youtubeEmbedUrl(id: string, autoplay = false) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    ...(autoplay ? { autoplay: "1" } : {}),
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export function extractVimeoId(urlOrId: string): string | null {
  const trimmed = urlOrId.trim();
  if (/^\d+$/.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);
    if (!url.hostname.includes("vimeo.com")) return null;

    const parts = url.pathname.split("/").filter(Boolean);
    const videoIndex = parts.indexOf("video");
    const id = videoIndex >= 0 ? parts[videoIndex + 1] : parts[0];
    return id && /^\d+$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

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

export function getVideoEmbedUrl(url: string, autoplay = false): string | null {
  const youtubeId = extractYouTubeId(url);
  if (youtubeId) return youtubeEmbedUrl(youtubeId, autoplay);

  const vimeoId = extractVimeoId(url);
  if (vimeoId) return vimeoEmbedUrl(vimeoId, autoplay);

  return null;
}
