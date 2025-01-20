// tokens/palette.js
const palette = {

    light: {
        primary: {
            main: '#308C73', // Replace with your brand's primary color
            light: '#6fb3f3',
            dark: '#217dbb',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#2ecc71',
            light: '#66ff9f',
            dark: '#28a745',
            contrastText: '#ffffff',
        },
        error: {
            main: '#D32F2F',
            light: '#EF5350',
            dark: '#B71C1C',
            contrastText: '#ffffff',
        },
        info: {
            main: '#4C4D4F',
            light: '#81d4fa',
            dark: '#0288d1',
            contrastText: '#ffffff',
        },
        success: {
            main: '#4caf50',
            light: '#81c784',
            dark: '#388e3c',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#ff9800',
            light: '#ffc947',
            dark: '#f57c00',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f5f5f5', // Replace with your desired default background
        },

        action: {
            hover: 'rgba(0, 0, 0, 0.05)', // Override global hover
        },
        
        customColors: {
            buttonBg: '#FF5733',
            buttonText: '#FFFFFF',
            cardBorder: '#D4AF37',
            alertBackground: '#FFF5E5',
        },
    },
    dark: {
        primary: {
            main: '#308c73',
            light: '#5cb490',
            dark: '#246051',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#D32F2F',
            light: '#EF5350',
            dark: '#B71C1C',
            contrastText: '#ffffff',
        },

        action: {
            hover: 'rgba(0, 0, 0, 0.05)', // Override global hover
        },
        
        customColors: {
            buttonBg: '#FF5733',
            buttonText: '#FFFFFF',
            cardBorder: '#D4AF37',
            alertBackground: '#FFF5E5',
        },
    },
};

export default palette;
