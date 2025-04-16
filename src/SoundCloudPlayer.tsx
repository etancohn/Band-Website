import ReactPlayer from "react-player";
import { SoundCloudConfig } from "react-player/soundcloud";

interface SoundCloudProps {
  trackUrl: string;
}

export const SoundCloudPlayer = (props: SoundCloudProps) => {
  const { trackUrl } = props;
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}`;

  return (
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      // allow="autoplay"
      src={embedUrl}
    ></iframe>
  );
};

interface SoundCloudPlaylistProps {
  playlistUrl: string;
}

export const SoundCloudPlaylist = (props: SoundCloudPlaylistProps) => {
  const { playlistUrl } = props;
  return <ReactPlayer 
    url={playlistUrl} 
    // height="330px" 
    config={{
        soundcloud: {
          options: {
            // color: '#006400',         // Dark green or whatever hex color you want
            auto_play: false,
            hide_related: true,
            show_comments: false,
            show_user: false,
            show_reposts: false,
            visual: false              // true = big visual layout (color won't work)
          }
        } as SoundCloudConfig
      }}
    />;
};