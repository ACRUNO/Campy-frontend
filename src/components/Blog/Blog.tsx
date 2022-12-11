import Footer from "../Footer";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


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
                    src="https://mapealia.es/wp-content/uploads/estamos-trabajando-864x380.jpg"
                    sx={{ backgroundPosition: 'center' }}
                />
            </Box>
            <Footer />
        </Box>
    )
}