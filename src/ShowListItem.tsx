// import React from 'react'
import './ShowListItem.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
    useEffect(() => {
        AOS.init({
          duration: 800, // Adjust as needed
          easing: 'ease-in-out',
          once: true, // Only animate once on scroll
        });
      }, []);

    return (
        <ul className="showList">
        {showsData.map((show, index) => (
            <li 
                key={index} 
                className="showItem"
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
                <div className="showButton">
                    Link
                </div>
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
    )
}

export default ShowListItem
