import { createTheme } from "@mui/material";



// export const mainColor = 'rgb(100, 215, 240)'; // #64d6f0   // ORIGINAL BLUE
// export const mainColor = 'rgb(234, 51, 135)';  // MOTION.DEV MAGENTA
export const mainColor = '#E51A4C';
// export const mainColor = '#8B0C2B';

// export const shadowColor = '#3a3a3a';  // ORIGINAL GRAY OUTLINE AND PARTICLES 
export const shadowColor = '#8B0C2B'

export const particleColor = '#3a3a3a';

export const titleColor = 'white';

export const theme = createTheme({
    typography: {
      fontFamily: 'Merriweather, serif', // Set Merriweather as the default body font
      subtitle1: {
        fontWeight: 'bold',
        fontSize: 22,
      },
      caption: {
        fontSize: 16,
      },
      // You can define specific styles for other variants if needed
    },
    palette: {
      primary: {
        // main: 'red'
        main: mainColor, // Use your blue color in the palette
      },
      mode: 'dark',
      // ... other palette configurations
    },
  });