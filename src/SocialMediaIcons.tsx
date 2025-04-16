import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsSpotify } from 'react-icons/bs';
import { blueColor } from './MemberAvatars';

function SocialMediaIcons() {
    const iconVariants = {
        initial: { scale: 1, opacity: 0.8 },
        hover: { scale: 1.1, opacity: 1, transition: { duration: 0.2 } },
    };
    
    const iconStyle = {
        fontSize: '2.5rem', // Adjust size as needed
        color: blueColor,
        // color: '#333', // Default icon color
        margin: '0 10px', // Spacing between icons
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <motion.a
            href=""
            // href="https://facebook.com/yourband" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            style={iconStyle}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href='#'
            // href="https://instagram.com/yourband" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            style={iconStyle}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="#"
            // href="https://spotify.com/artist/yourbandid" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            style={iconStyle}
          >
            <BsSpotify />
          </motion.a>
          {/* Add more social media icons as needed */}
        </div>
    );
}

export default SocialMediaIcons
