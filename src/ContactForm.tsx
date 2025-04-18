import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import './ContactForm.css';

function ContactForm() {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // In a real implementation, you would send this data to your backend or a form service
    console.log({ subject, email, message });
    alert('This will send an email once it is set up :)');
    // Optionally clear the form
    setSubject('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
        className="contact-form-container"
        data-aos="fade-up" // Animate the entire container
        data-aos-duration="600" // Shorter duration for the container
    >
    <Box 
        className='box-container'
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ mt: 2, mb: 4 }}
    >
        <h2
                style={{
                    fontSize: '3rem',
                    color: 'white',
                    // color: blueColor,
                    marginTop: 0,
                    marginBottom: 0,
                    textAlign: 'center',
                }}
            >
                Contact
        </h2>

    <div className="contact-input">
      <TextField
        fullWidth
        label="Subject"
        id="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        margin="normal"
        required
      />
    </div>
      <TextField
        fullWidth
        className='contact-input'
        label="Email Address"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        className='contact-input'
        label="Message"
        // id="message"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        margin="normal"
        required
      />
      <div style={{ width: 300 }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            type="submit"
            variant="contained" // Use contained for a filled button
            sx={{
              backgroundColor: 'rgb(100, 215, 240)', // Replace 'blue'
              color: 'black',
              textDecoration: 'none',
              padding: '15px 0px',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: '2px solid #3a3a3a',
              boxShadow: '0 0 10px #3a3a3a',
              textAlign: 'center',
              width: '15rem',
              marginTop: '0.6rem',
              '&:hover': {
                cursor: 'pointer',
                // You can add hover background color change here if needed
                // backgroundColor: 'darkblue',
              },
            }}
          >
            Submit
          </Button>
        </motion.div>
      </div>
    </Box>
    </div>
  );
}

export default ContactForm;