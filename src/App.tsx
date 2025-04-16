import './App.css';
import { SoundCloudPlaylist } from './SoundCloudPlayer';
import MemberAvatars from './MemberAvatars';
import ParticlesBackground from './ParticlesBackground';
import BandTitle from './BandTitle';

function App() {

    return (
      <div className='app-container'>
        <ParticlesBackground />
        <BandTitle />
        <MemberAvatars />
        <SoundCloudPlaylist
          playlistUrl='https://soundcloud.com/etan-cohn-996334839/sets/boston-band'
        />
      </div>
    );
}

export default App;