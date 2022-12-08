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
        }
    },
    typography: {
        fontFamily: "'Sen', sans-serif"
    }
})

export default theme;
