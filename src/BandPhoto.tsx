import { motion } from 'framer-motion';
import bandPhoto from "./assets/band-photo-1.jpg";

function BandPhoto() {
    const photoVariants = {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1, 
          transition: { duration: 1 },
        }, // Adjust duration as needed
    };

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '88%',
        // height: '20%',
        // height: '100%',
        // backgroundColor: 'red'
        // marginBottom: 100,
        // height: 200,
      }}>
        <motion.img
          src={bandPhoto}
          alt="Your Band"
          variants={photoVariants}
          initial="initial"
          animate="animate"
          style={{
            // height: '95%',
            // width: '93%',
            marginTop: -70,
            height: '100%',
            // width: '60%',
            borderRadius: 10,
            // boxShadow: '0px 2px 5px rgba(58, 58, 58, 0.5)',
            boxShadow: '0px 2px 5px rgba(200, 200, 200, 0.1)', /* Example light gray shadow */
          }}
        />
      </div>
  );
}

export default BandPhoto
