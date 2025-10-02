import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import './ContactForm.css';
import { sendEmailToEtan } from './Api';
import CircularProgress from '@mui/material/CircularProgress';
import { mainColor, shadowColor } from './Colors';

function ContactForm() {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    // In a real implementation, you would send this data to your backend or a form service
    console.log({ subject, email, message });
    setLoading(true);
    const response = await sendEmailToEtan(email, subject, message);
    console.log("RESP: ", response)
    setLoading(false);

    // alert('This will send an email once it is set up :)');

    // Optionally clear the form
    setSubject('');
    setEmail('');
    setMessage('');
    alert('Message sent successfully. You should hear back from us soon :)');
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
          className='contact-input'
          // style={{
          //   // display: 'flex',
          //   // justifyContent: 'center',
          //   // width: '32rem',
          // }}
        >
          <Button
            type="submit"
            variant="contained" // Use contained for a filled button
            sx={{
              backgroundColor: mainColor,
              color: 'black',
              // color: '#F5F5F5',
              textDecoration: 'none',
              padding: '15px 0px',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: `2px solid ${shadowColor}`,
              boxShadow: `0 0 10px ${shadowColor}`,
              textAlign: 'center',
              width: '15rem',
              marginTop: '0.6rem',
              alignSelf: 'center',
              '&:hover': {
                cursor: 'pointer',
                // You can add hover background color change here if needed
                // backgroundColor: 'darkblue',
              },
            }}
          >
            {/* Conditional rendering: Show spinner when loading, otherwise show text */}
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Submit'
            )}
          </Button>
        </motion.div>
      </div>
    </Box>
    </div>
  );
}

export default ContactForm;