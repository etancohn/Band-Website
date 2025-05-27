import ReactPlayer from "react-player";
import { SoundCloudConfig } from "react-player/soundcloud";
import './SoundCloudPlayer.css';
import { useMediaQuery } from '@mui/material';

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
  const isMobile = useMediaQuery('(max-width:600px)');
  return <ReactPlayer 
    url={playlistUrl} 
    // height="330px" 
    width={isMobile ? 400 : 600}
    // className="soundcloud-playlist"
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