import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsSpotify } from 'react-icons/bs';
import { blueColor } from './MemberAvatars';

function SocialMediaIcons() {
    const iconVariants = {
        initial: { scale: 1, opacity: 0.8 },
        hover: { scale: 1.1, opacity: 1, transition: { duration: 0.2 } },
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 }, // Start slightly below and faded out
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.2, // Adjust delay
            duration: 1.2,
            ease: 'easeOut',
            staggerChildren: 0.1, // Animate each icon with a slight delay
          },
        },
      };

    // const containerVariants = {
    //     hidden: { opacity: 0 },
    //     visible: {
    //       opacity: 1,
    //       transition: {
    //         delay: 1, // Adjust this delay to wait for your band name animation to finish (in seconds)
    //         duration: 2.5, // Duration of the fade-in
    //         ease: 'easeOut',
    //       },
    //     },
    //   };
    
    const iconStyle = {
        fontSize: '2.7rem', // Adjust size as needed
        color: blueColor,
        // color: '#333', // Default icon color
        margin: '0 10px', // Spacing between icons
        // zIndex: 1000,
    };
    return (
        <motion.div 
            style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
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
        </motion.div>
    );
}

export default SocialMediaIcons
