import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import etanImg from './assets/etan-headshot.jpg';
import './MemberAvatars.css';
// // @ts-ignore
// import Images from './assets/Images.js';

export const blueColor = 'rgb(100, 215, 240)'; // #64d6f0

type BandMemberCardProps = {
    name: string, 
    role: string, 
    image: string, 
    funFact: string,
}

const BandMemberCard = (props: BandMemberCardProps) => {
    return (
      <Box
        sx={{
          position: 'relative',
          width: 128,
          height: 128,
          mx: 'auto',
          border: '2px solid #3a3a3a',
          boxShadow: '0 0 10px #3a3a3a',
          borderRadius: '50%',
          '&:hover .overlay': {
            opacity: 1,
          },
          '&:hover .avatar': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <Avatar
          alt={props.name}
          src={props.image}
          className="avatar"
          sx={{
            width: '100%',
            height: '100%',
            transition: 'transform 0.3s ease-in-out',
          }}
        ></Avatar>
        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            // p: 1,
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <Typography variant="body2">{props.funFact}</Typography>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 0.5, mb: 0, lineHeight: 0.8 }}>
          <Typography 
            variant="subtitle1" 
            fontWeight="bold"
            style={{
                color: blueColor,
                fontSize: 22,
            }}
          >
            {props.name}
          </Typography>
          <Typography 
            variant="caption" 
            color="gray"
            sx={{ mt: 0, lineHeight: 0.8 }}
            style={{
                fontSize: 16,
            }}
          >
            {props.role}
          </Typography>
        </Box>
      </Box>
    );
  };
  

function MemberAvatars() {
    const members = [
        {
            name: 'Kaitlyn',
            role: 'Vocals & Piano',
            image: '#',
            funFact: 'This is a fun fact about Kaitln.',
        },
        {
            name: 'Adam',
            role: 'Guitar',
            image: '#',
            funFact: 'This is a fun fact about Adam.',
        },
        {
            name: 'Alex',
            role: 'Bass',
            image: '#',
            funFact: 'This is a fun fact about Alex.',
        },
        {
            name: 'Etan',
            role: 'Drums',
            image: etanImg,
            funFact: 'This is a fun fact about Etan.',
        },
    ];
    return (
        <div>
            <Typography
                variant='h3'
                fontWeight='bold'
                color={blueColor}
                sx={{ textAlign: 'center' }}
                style={{
                    marginBottom: 20,
                }}
            >Meet The Band</Typography>
            <div className='avatars-container' style={{marginBottom: 100}}>
                    {members.map((m) => (
                        <BandMemberCard key={m.name} {...m} />
                    ))}
            </div>
        </div>
    )
}

export default MemberAvatars
