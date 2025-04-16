import { motion } from 'framer-motion';
import bandPhoto from "./assets/band-photo.jpg";

function BandPhoto() {
    const photoVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1 } }, // Adjust duration as needed
    };

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '88%',
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
            height: '95%',
            borderRadius: 20,
          }}
        />
      </div>
  );
}

export default BandPhoto
