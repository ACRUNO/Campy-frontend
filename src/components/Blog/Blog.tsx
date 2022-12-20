import Footer from "../Footer";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Form } from "react-router-dom";
import axios from "axios";


export default function Blog() {


    return (
        <Box>
            <Box 
            sx={{ 
                height: '60vh', 
                display: "flex",
                justifyContent: "center"
                }}>
                <Box 
                    component="img"
                    alt="Componente en progreso..."
                    src="https://res.cloudinary.com/pfcampy/image/upload/v1670853348/campy/Funcionalidad_en_desarrollo_y7cqm6.jpg"
                    sx={{ backgroundPosition: 'center',mt:'5%',mb:'3%' }}
                />
            </Box>
           

            <Footer />
        </Box>
    )
}