import { Box} from "@mui/system";
import Footer from "../Footer";


/* https://mapealia.es/wp-content/uploads/estamos-trabajando-864x380.jpg */

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
                    src="https://res.cloudinary.com/pfcampy/image/upload/v1670853348/campy/Funcionalidad_en_desarrollo_y7cqm6.jpg"
                    sx={{ backgroundPosition: 'center',mt:'5%',mb:'3%'}}
                />
            </Box>
            <Footer />
        </Box>
    )

}

