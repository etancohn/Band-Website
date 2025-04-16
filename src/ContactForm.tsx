import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function ContactForm() {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
        width: '90%', 
        backgroundColor: 'rgba(58, 58, 58, 0.5)',
        borderRadius: 15,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        }}
    >
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, mb: 2 }}>
      <TextField
        fullWidth
        label="Subject"
        id="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        fullWidth
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
        label="Message"
        id="message"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
    </div>
  );
}

export default ContactForm;