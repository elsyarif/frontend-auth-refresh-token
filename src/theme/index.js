import {createTheme} from "@mui/material/styles";


export const theme = createTheme({
    palette: {
        mode: "light",
        common: {
            black: '#000000'
        },
        success:{
            main: "#009444",
            light: "#58BF58",
            dark: "#005900"
        },
        secondary: {
            main: "#6B3BED",
            light:"#7F7CFC",
            dark:"#301988"
        },
        error:{
            main:"#FF0000",
            light:"#FF6082",
            dark:"#8A0000"
        },
        warning:{
            main:"#FFCA45",
            light:"#FFE98A",
            dark:"#9F7E2B"
        },
        info:{
            main:"#17A2B8",
            light:"#75D7E7",
            dark:"#0E6573"
        },
    },
    typography: {
        fontFamily: "Poppins"
    },
    breakpoints: {
        values: {
            lg: 1280
        }
    }
})