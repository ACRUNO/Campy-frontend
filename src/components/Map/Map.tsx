import { Box } from "@mui/system";
import Footer from "../Footer";



export default function Map() {

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
