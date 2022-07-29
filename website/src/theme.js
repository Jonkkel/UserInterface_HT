
import { createTheme } from '@mui/material/styles';
// Determining the used colors and pallette
const theme = createTheme({
    palette: {
        primary: {
            main: '#2F8F9D', //Blue
            light: '#00ff94', //Teal
            dark: '#5200ff', //Blue/purple
            // main: '#ffa978', //orange
            contrastText: '#000',
        },
        secondary: {
            main: '#101010',
        },
        beer: {
            main: '#ff9f29',
            light: '#ffc176',
            dark: '##dc7900',
            contrastText: '#FFF',
        },
        white: {
            main: '#FFF',
            light: '#2cff78',
            dark: '#F0EBE3',
            contrastText: '#000',
        },
        black: {
            main: '#000',
            light: '#2C3639',
            dark: '#576F72',
            contrastText: '#FFF',
        },
        blue: {
            main: '#1236F3', //Blue
            light: '#00ff94', //Teal
            dark: '#5200ff', //Blue/purple
            // main: '#ffa978', //orange
            contrastText: '#000',

        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        button: {
            textTransform: 'none'
        },
        fontFamily: [
            "Poppins",
            'sans-serif'
        ].join(','),
    },

});

export default theme;