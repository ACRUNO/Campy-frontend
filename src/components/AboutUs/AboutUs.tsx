import Style from './AboutUs.module.css'
import agus from "./agus.png";
import joaco from './joaco.png';
import virgi from './virgi.png';
import august from './augusto.jpeg';
import gaby from './gaby.png';
import santi from './santi.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/material';
import Footer from '../Footer/Footer';

 

import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FadeInParagraph from "./Parrafo"
import { padding } from '@mui/system';



export default function Model3() {
  const [open, setOpen] = React.useState(false);
  let handleModal = () => {
    setOpen(true)
  }
  const tiers = [
    {
      title: 'Comodidades ',
      price: '0',
      description: [
        'Mercado justo',
        'Accesible para el viajero',
        'Navegacion intuitiva',
        'Grandes descuentos',

      ],
    },
    {
      title: 'Valor agregado',
      subheader: 'Al turismo local',
      price: '',
      description: [
        'Crecimiento del turismo',
        'Visibilidad a nuevas locaciones',
        'Exposicion masiva ',
        'Publicidad constante',
        'Crecimiento regional'
      ],

    },
    {
      title: 'Oportunidad',
      price: '',
      description: [
        'Aumento de clientes',
        'Mejora en calidad de vida',
        'Mejora en calidad de viajes',
        'Precios reales',


      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
  ];
  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];



  const membersCampy: any = [
    {
      id: agus,
      name: "Agustin Romero",
      position: "FullStack",
      description1: "asdsad asdasd asd",
      description2: "das sadsadsad",
      description3: "das sadsadsad",
      description4: "das sadsadsad",
      linkedin: "https://www.linkedin.com/in/agust%C3%ADn-romero-33919b24b/",
      github: "https://github.com/Nitsuga159"
    },
    {
      id: virgi,
      name: "Maria Virginia Juarez",
      position: "FullStack",
      description1: "Compromiso",
      description2: "Proactividad",
      description3: "Resolucion de problemas",
      description4: "das sadsadsad", linkedin: "http://www.linkedin.com/in/maria-virginia-juarez",
      github: "https://github.com/VirJuarez"
    },
    {
      id: joaco,
      name: "Joaquin Delgado",
      position: "FullStack",
      description1: "asdsad asdasd asd",
      description2: "das sadsadsad",
      description3: "das sadsadsad",
      description4: "das sadsadsad", linkedin: "https://www.linkedin.com/in/joaquin-delgado-2702391b0/",
      github: "https://github.com/ACRUNO"
    },
    {
      id: gaby,
      name: "Gabriela Carranza",
      position: "FullStack",
      description1: "asdsad asdasd asd",
      description2: "das sadsadsad",
      description3: "das sadsadsad",
      description4: "das sadsadsad", linkedin: "https://www.linkedin.com/in/gabrielacarranzasistemas",
      github: "https://github.com/GabrielaCarranza"
    },
    {
      id: august,
      name: "Augusto Gabriel Alvarez",
      position: "FullStack",
      description1: "asdsad asdasd asd",
      description2: "das sadsadsad",
      description3: "das sadsadsad",
      description4: "das sadsadsad", linkedin: "https://www.linkedin.com/in/augusto-gabriel-alvarez-360895240/",
      github: "https://github.com/augusto2304"
    },
    {
      id: santi,
      name: "Santiago Pagnanelli",
      position: "FullStack",
      description1: "asdsad asdasd asd",
      description2: "das sadsadsad",
      description3: "das sadsadsad",
      description4: "das sadsadsad", linkedin: "https://www.linkedin.com/in/santiago-pagnanelli/",
      github: "https://github.com/SantiagoPag"
    },
    {
      id: agus,
      name: "Javier Montenegro",
      position: "FullStack",
      description1: "asdsad asdasd asd",
      description2: "das sadsadsad",
      description3: "das sadsadsad",
      description4: "das sadsadsad", linkedin: "https://www.linkedin.com/in/javier-leandro-montenegro/",
      github: "https://github.com/javierleandromontenegro"
    },
  ]
  const logo: string = "https://res.cloudinary.com/pfcampy/image/upload/v1670466096/logo_CAMPY_rjsp9a.png"
  return (
    <Box className={Style.model3algoooooooooooo}>
      <Box className={Style.allcont}>
        <Box className={Style.boxx}>

          <h1>¿ Que es <Box component="img" className={logo} alt="Logo" src={logo} /> ? </h1>

          <Container maxWidth="md" component="main">
            <Grid container display="flex" spacing={5} alignItems="flex-end" >
              {tiers.map((tier) => (
                // Enterprise card is full width at sm breakpoint
                <Grid
                  item
                  key={tier.title}
                  xs={12}
                  sm={tier.title === 'Enterprise' ? 12 : 6}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Card className={Style.fadeinparagraph} sx={{ width: "25rem" }} >
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Pro' ? <StarIcon /> : null}
                      subheaderTypographyProps={{
                        align: 'center',
                      }}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'baseline',

                        }}
                      >

                      </Box>
                      <ul className={Style.listaAbout}>
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            /* variant="subtitle1" */
                            className={Style.listaDetalle}
                            align="center"                            
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>

                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>

          <Grid xs={12}
          >
            <FadeInParagraph></FadeInParagraph>
          </Grid>
          {/* <h4 className={Style.descrip}> Campy es un proyecto creado por alumnos del bootcamp  SoyHenry, en el cual se expone todo lo aprendido durante el mismo.
            Es una Aplicacion Orientada a los viajes y aventuras de Camping en la cual se pueden realizar reservas, conectar con nuevos lugares y con gente que tienen el mismo amor por la naturaleza y el turismo. </h4> */}
          {/* <Box sx={{ display: "flex", flexDirection: "row", width: "100vw", justifyContent: "space-evenly" }}>
          </Box> */}
          <div className={Style.divider}></div>
        </Box>


        <Grid>
          <Grid display="flex" justifyContent="center">
            <h1 className={Style.modeltitle}>  <Box component="img" className={logo} alt="Logo" src={logo} /> Team </h1>
          </Grid>
          <div className={Style.members}>
            {membersCampy.map((m: any) => {
              return (
                <div className={Style.member}>
                  <img className={Style.img} width={130} height={130} src={m.id} />
                  <div className={Style.description}>
                    <h2>{m.name}</h2>
                    <h3>{m.position}</h3>


                    {/* <li>{m.description1}</li>
                  <li>{m.description2}</li>
                  <li>{m.description3}</li> */}
                    {/* <li>{m.description4}</li> */}

                    <div className={Style.socialmedia}>
                      <a className={Style.eleA} href={m.linkedin} target="_blank" rel="noopener noreferrer">

                        <LinkedInIcon />
                      </a>
                      <a className={Style.eleA} href={m.github} target="_blank" rel="noopener noreferrer">

                        <GitHubIcon />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}


          </div>
        </Grid>
      </Box>


      <Footer></Footer>
    </Box>
  );
}





