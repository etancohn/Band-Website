import './App.css';
import { SoundCloudPlaylist } from './SoundCloudPlayer';
import MemberAvatars, { blueColor } from './MemberAvatars';
import ParticlesBackground from './ParticlesBackground';
import BandTitle from './BandTitle';
import SocialMediaIcons from './SocialMediaIcons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import { useEffect } from 'react';
import BandPhoto from './BandPhoto';
import ShowListItem from './ShowListItem';
import { motion } from 'framer-motion';

function App() {

  const headerVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Adjust duration as needed
};

  useEffect(() => {
    AOS.init({
      // You can also pass settings here like duration, easing, etc.
      offset: 120, // Offset (in px) from the original trigger point
      delay: 0, // Values from 0 to 3000, with step 50ms
      duration: 400, // Values from 0 to 3000, with step 50ms
      easing: 'ease', // Default easing for AOS animations
      once: false, // Whether animation should happen only once on scroll down
      mirror: false, // Whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
    });
  }, []);

    return (
      <div className='app-container'>
        <div style={{ marginTop: 3 }}></div>
        <ParticlesBackground />
        <BandTitle />
        <div
          style={{ 
            marginTop: 10,
            height: '69vh', 
            width: '90%', 
            backgroundColor: 'rgba(58, 58, 58, 0.5)',
            borderRadius: 15,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <BandPhoto />
          <div 
            style={{
              position: 'absolute',
              bottom: 0,
            }}
          >
            <SocialMediaIcons />
          </div>
        </div>
        <div 
          style={{
            marginTop: 50,
            marginBottom: -100,
          }}
        >
          <motion.h2
              variants={headerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              style={{
                  fontSize: '3rem',
                  color: blueColor,
              }}
          >
              Meet The Band
          </motion.h2>
        </div>
        <div data-aos="fade-right" data-aos-delay="200" style={{ marginTop: 75 }}>
          <MemberAvatars />
        </div>
        <div style={{ 
          width: '50%',
          marginTop: 130, 
          marginBottom: 20,
          minWidth: 330,
          display: 'flex',
          justifyContent: 'center',
        }} data-aos="zoom-in"
        >
          <SoundCloudPlaylist
            playlistUrl='https://soundcloud.com/etan-cohn-996334839/sets/boston-band'
          />
        </div>
        {/* <div
          style={{
            marginTop: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        > */}
          <ShowListItem />
        {/* </div> */}

        <div style={{ marginBottom: 40 }}></div>
      </div>
    );
}

export default App;