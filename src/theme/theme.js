import { createTheme } from '@mui/material/styles';
import palette from '../tokens/palette';
import typography from '../tokens/typography';
import shadows from '../tokens/shadows';
import spacing from '../tokens/spacing';

const baseTheme = {
  typography,
  spacing,
  shadows,
  shape: {
    borderRadius: 4,
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    ...palette.light,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          position: 'relative', // For the overlay
          overflow: 'hidden', // Prevent overlay from going outside the button
          transition: 'background-color 0.2s ease-in-out', // Smooth transitions
          '&:hover': {
            backgroundColor: 'transparent', // Remove default MUI hover color
          },
          '&:hover::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.05)', // Semi-transparent black overlay
            borderRadius: 'inherit', // Match button's border radius
            pointerEvents: 'none', // Ensure clicks pass through
          },
        },
        contained: {
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)', // For contained buttons
          },
        },
        outlined: {
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)', // For outlined buttons
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)', // For text buttons
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    ...palette.dark,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-color 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:hover::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: 'inherit',
            pointerEvents: 'none',
          },
        },
      },
    },
  },
});