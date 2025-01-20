// tokens/typography.js
const typography = {
    fontFamily: 'Proxima Nova, Arial, sans-serif',
    h1: {
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.25,
        '@media (min-width:600px)': {
            fontSize: '2.5rem',
        },
        '@media (min-width:900px)': {
            fontSize: '3rem',
        },
    },
    h2: {
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: 1.3,
    },
    body1: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    body2: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: 1.4,
    },
    caption: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: 1.3,
    },
};

export default typography;