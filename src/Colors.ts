import { createTheme } from "@mui/material";



export const mainColor = 'rgb(100, 215, 240)'; // #64d6f0
// export const mainColor = 'rgb(234, 51, 135)';

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