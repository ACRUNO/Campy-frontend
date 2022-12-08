import  {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            dark: '#000000',
            light: '#ffffff'
        },
        secondary: {
            main: '#5f8d4e',
            dark: '#285430',
            light: '#A4BE7B'
        },
        info: {
            main: '#0A0E06',
            dark: '#070C03',
            light: '#494D44'
        }
    },
    typography: {
        fontFamily: "'Sen', sans-serif"
    }
})

export default theme;
