import type { Media } from "@/content/works";

function YouTubeEmbed({ id }: { id: string }) {
  return (
    <div className="aspect-video overflow-hidden bg-ink/5">
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}

export function MediaEmbed({ media }: { media: Media }) {
  if (media.type === "youtube") {
    return <YouTubeEmbed id={media.id} />;
  }

  if (media.type === "youtube-grid") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {media.ids.map((id) => (
          <YouTubeEmbed key={id} id={id} />
        ))}
      </div>
    );
  }

  if (media.type === "spotify") {
    const url = media.uri.startsWith("http")
      ? media.uri
      : `https://open.spotify.com/embed?uri=${encodeURIComponent(media.uri)}`;
    return (
      <iframe
        src={url}
        title="Spotify player"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="h-[152px] w-full"
      />
    );
  }

  if (media.type === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={media.src} alt={media.alt} className="w-full" />
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {media.items.map((item) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={item.src} src={item.src} alt={item.alt} className="w-full" />
      ))}
    </div>
  );
}
