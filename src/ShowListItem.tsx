import { motion } from 'framer-motion';
import './ShowListItem.css';
import 'aos/dist/aos.css';
import { mainColor, shadowColor } from './Colors';

type Show = {
    date: string,
    name: string,
    city: string,
    link: string,
}

const showsData: Show[] = [
    {
        date: "July 19, 2025",
        name: "Cambridge Porchfest",
        city: "Cambridge, MA",
        link: "https://docs.google.com/document/d/1p-bnth_EKAc4eE5TF5_5GXHx8iaG4bRa/edit",
    }
    // {
    //   date: 'May 10, 2025',
    //   name: 'Porchfest',
    //   city: 'Somerville, MA',
    //   link: '#',
    // },
    // {
    //   date: 'Date TBD',
    //   name: 'The Lilypad',
    //   city: 'Cambridge, MA',
    //   link: '#',
    // },
    // {
    //   date: 'Date TBD',
    //   name: 'The Lilypad',
    //   city: 'Cambridge, MA',
    //   link: '#',
    // },
    // Add more show data here
];

const showsData2: Show[] = [];

function ShowListItem() {
    const headerVariants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Adjust duration as needed
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
            }}
        >
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
                fontSize: '2.8rem',
                color: mainColor,
                marginBottom: 0,
                textAlign: 'center',
            }}
        >
            Upcoming Shows
        </motion.h2>
        </div>
        <ul className="showList">
        {
            showsData?.length == 0 ?
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 200,
                    fontSize: 19,
                    fontStyle: 'italic',
                }}
            >No shows coming up. Check back soon!</div> :
            showsData?.map((show, index) => (
            <li 
                key={index} 
                className="showItem"
                data-aos="fade-up"
                // data-aos-delay={index * 100}
            >
                <div className="showDetails">
                    <span className="showDate">
                        { show.date }
                    </span>
                    <h3 className="showName">{show.name}</h3>
                </div>
                <span className="showCity">{show.city}</span>
                <motion.div 
                    className="showButton"
                    style={{
                        backgroundColor: mainColor,
                        border: `2px solid ${shadowColor}`,
                        boxShadow: `0 0 10px ${shadowColor}`,
                        color: '#F5F5F5'
                    }}
                    whileHover={{ scale: 1.05 }} // Define the scale animation on hover
                    transition={{ duration: 0.2 }} // Add a smooth transition
                    onClick={() => window.location.href = show.link}
                >
                    Link
                </motion.div>
            {index < showsData.length - 1 && <div className="divider"></div>}
            </li>
        ))}
        </ul>
        </div>
    )
}

export default ShowListItem
