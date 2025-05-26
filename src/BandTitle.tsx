import { motion } from 'framer-motion';
import { titleColor } from './Colors';
import  { kateNRosesPathsData } from './assets/pathsData.tsx';
import './BandTitle.css';

function BandTitle() {
    
    const pathVariants = {
        hidden: {
          pathLength: 0,
          opacity: 0,
        },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: {
            duration: 2, // Adjust as needed
            // ease: 'easeIn'
            ease: "easeInOut",
          },
        //   springy: { scale: 1.2, transition: { type: "spring", stiffness: 150, damping: 15 } },
        },
    };

    return (
            <svg 
                // viewBox="0 0 207 72"
                viewBox='0 0 238 60'
                className="bandName"
                // width={500}
                // height={'18vh'}
            > {/* Adjust viewBox based on your SVG */}
                {kateNRosesPathsData.map((path, index) => (
                  <motion.path
                    key={index}
                    d={path}
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    // stroke={blueColor}
                    // stroke='white'
                    stroke={titleColor}
                    // stroke="#000"
                    strokeWidth="1"
                    fill="transparent"
                    />
                ))}
            </svg>
    )
}

export default BandTitle
