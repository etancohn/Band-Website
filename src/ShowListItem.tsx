// import React from 'react'
import { motion } from 'framer-motion';
import './ShowListItem.css';
// import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';
// import Typography from '@mui/material/Typography';
import { blueColor } from './MemberAvatars';

const showsData = [
    {
      date: '2025-05-10',
      name: 'Porchfest',
      city: 'Somerville, MA',
      link: '#',
    },
    {
      date: '2025-06-23',
      name: 'The Lilypad',
      city: 'Cambridge, MA',
      link: '#',
    },
    {
      date: '2025-07-15',
      name: 'The Lilypad',
      city: 'Cambridge, MA',
      link: '',
    },
    // Add more show data here
];

function ShowListItem() {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 800, // Adjust as needed
    //         // easing: 'ease-in-out',
    //         offset: 120, // Offset (in px) from the original trigger point
    //         delay: 0, // Values from 0 to 3000, with step 50ms
    //         easing: 'ease', // Default easing for AOS animations
    //         once: false, // Whether animation should happen only once on scroll down
    //         mirror: false, // Whether elements should animate out while scrolling past them
    //         anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
    //     });
    //   }, []);
    const headerVariants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Adjust duration as needed
    };

    return (
        <>
        <div>
        <motion.h2
            variants={headerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            // animate="animate"
            // initial={{ opacity: 0, y: -20 }} // Start invisible and slightly above
            // animate={{ opacity: 1, y: 0 }}   // Animate to fully visible and original position
            // transition={{ duration: 0.5, ease: "easeOut" }} // Adjust duration and easing
            style={{
                fontSize: '3rem',
                color: blueColor,
                marginBottom: -8,
            }}
        >
            Upcoming Shows
        </motion.h2>
        </div>
        <ul className="showList">
        {showsData.map((show, index) => (
            <li 
                key={index} 
                className="showItem"
                data-aos="fade-up"
                // data-aos-delay={index * 100}
            >
                <div className="showDetails">
                    <span className="showDate">
                        {new Date(show.date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })}
                    </span>
                    <h3 className="showName">{show.name}</h3>
                </div>
                <span className="showCity">{show.city}</span>
                <motion.div 
                    className="showButton"
                    whileHover={{ scale: 1.05 }} // Define the scale animation on hover
                    transition={{ duration: 0.2 }} // Add a smooth transition
                >
                    Link
                </motion.div>
            {/* <Link to={show.link} className="showButton">
                Tickets
            </Link> */}
            {index < showsData.length - 1 && <div className="divider"></div>}
            </li>
        ))}
        </ul>
        // <div className='show-list-item'>
        //     <div className="show-date">05/10</div>
        // </div>
        </>
    )
}

export default ShowListItem
