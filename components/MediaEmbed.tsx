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

function soundcloudSrc(url: string, visual: boolean) {
  const params = new URLSearchParams({
    url,
    color: "#2f9e96",
    auto_play: "false",
    hide_related: "true",
    show_comments: "false",
    show_user: "true",
    show_reposts: "false",
    show_teaser: "false",
    visual: visual ? "true" : "false",
  });
  return `https://w.soundcloud.com/player/?${params.toString()}`;
}

function SoundCloudPlayer({
  url,
  title,
  visual = true,
}: {
  url: string;
  title?: string;
  visual?: boolean;
}) {
  return (
    <figure>
      {title ? (
        <figcaption className="mb-2 text-sm font-medium tracking-wide text-ink">
          {title}
        </figcaption>
      ) : null}
      <iframe
        title={title ?? "SoundCloud player"}
        src={soundcloudSrc(url, visual)}
        allow="autoplay"
        loading="lazy"
        className={`w-full max-w-xl border-0 ${visual ? "h-[120px]" : "h-[88px]"}`}
      />
    </figure>
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
    const src = media.uri.startsWith("http")
      ? media.uri
      : `https://open.spotify.com/embed/track/${media.uri.replace("spotify:track:", "")}`;
    return (
      <iframe
        src={src}
        title="Spotify player"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="h-20 max-w-xl w-full"
      />
    );
  }

  if (media.type === "soundcloud") {
    return <SoundCloudPlayer url={media.url} title={media.title} visual={media.visual} />;
  }

  if (media.type === "soundcloud-list") {
    return (
      <section>
        {media.title ? (
          <h3 className="mb-3 text-sm font-medium tracking-wide text-ink">{media.title}</h3>
        ) : null}
        <div className="space-y-2">
          {media.tracks.map((track) => (
            <SoundCloudPlayer key={track.url} url={track.url} visual={false} />
          ))}
        </div>
      </section>
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
