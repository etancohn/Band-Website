import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import etanImg from './assets/etan-headshot.jpg';
// // @ts-ignore
// import Images from './assets/Images.js';

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
        >E</Avatar>
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
        <Box sx={{ textAlign: 'center', mt: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {props.name}
          </Typography>
          <Typography variant="caption" color="gray">
            {props.role}
          </Typography>
        </Box>
      </Box>
    );
  };
  

function MemberAvatars() {
    return (
        <div style={{marginBottom: 100}}>
        <BandMemberCard
            name="Etan Cohn"
            role="Drums"
            image={etanImg}
            // image={Images.etan}
            funFact="This is a fun fact about Etan."
        />
        </div>
        // <div>
        //     hiii
        // </div>
    )
}

export default MemberAvatars
