import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import './ContactForm.css';

function ContactForm() {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const headerVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Adjust duration as needed
};

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // In a real implementation, you would send this data to your backend or a form service
    console.log({ subject, email, message });
    alert('Message sent (not really in this example)!');
    // Optionally clear the form
    setSubject('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
        style={{ 
        marginTop: 30,
        // height: '69vh', 
        width: '50%', 
        backgroundColor: 'rgba(58, 58, 58, 0.5)',
        borderRadius: 15,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        }}
    >
    <Box 
        className='box-container'
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ mt: 2, mb: 4 }}
    >
        <motion.h2
                variants={headerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
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
        </motion.h2>

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
              marginTop: '0.5rem',
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