import './App.css';
import { SoundCloudPlaylist } from './SoundCloudPlayer';
import MemberAvatars from './MemberAvatars';
import ParticlesBackground from './ParticlesBackground';
import BandTitle from './BandTitle';

function App() {

    return (
      <div className='app-container'>
        <div style={{ marginTop: 3 }}></div>
        <ParticlesBackground />
        <BandTitle />
        <div
          style={{ 
            marginTop: 10,
            height: 540, 
            width: '80%', 
            backgroundColor: 'rgba(58, 58, 58, 0.5)',
            // backgroundColor: 'red',
            opacity: 0.5,
            borderRadius: 15,
            marginBottom: 10,
          }}
        >
        </div>
        <MemberAvatars />
        <SoundCloudPlaylist
          playlistUrl='https://soundcloud.com/etan-cohn-996334839/sets/boston-band'
        />
        <div style={{ marginBottom: 10 }}></div>
      </div>
    );
}

export default App;