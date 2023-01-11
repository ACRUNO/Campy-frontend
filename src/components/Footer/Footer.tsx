import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { sendEmailContact } from "../../actions/SendEmail.action"
import Link from '@mui/material/Link';
import Style from "./footer.module.css"
import { useNavigate } from "react-router-dom";
import Faqs from "../AboutUs/Faqs"
import Contact from "./Contact";

function Copyright(props: any) {




  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        CAMPY S.A.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Footer() {





  let navigate: any = useNavigate();

  let handleAbout = () => {
    navigate("/aboutus")
    window.scrollTo(0, 0);
  }

  let maileo: any = {
    name: "tito",
    email: "algo",
    subject: "todo mal",
    text: "me cagaron mal la cama tenia piojos ",
  }

  let handleContact = async () => {
    let roberto = await sendEmailContact(maileo)
  }

  return (
    <Box className={Style.footer} sx={{ p: '1rem 0', bgcolor: 'rgb(245, 245, 245)' }} component="footer" >
      <Grid container justifyContent="center" sx={{ pt: 5 }} >
        <Box className={Style.img}
          component="img"
          sx={{
            ml: "1%",
          }}
          alt="Logo"
          src={"https://res.cloudinary.com/pfcampy/image/upload/v1670849448/campy/logo_CAMPY-BLANCO_hn507u.png"} />
      </Grid>

      <Grid container sx={{ p: 3 }}>
        <Grid item xs={12} sm={12} md={4} justifyContent='center' alignItems='center' sx={{ p: 0.5 }} >
          <Typography sx={{ cursor: "pointer" }}
            onClick={handleAbout}
            variant="h5" component="h6" textAlign='center'
          > Quienes Somos
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} justifyContent='center' alignItems='center' sx={{ p: 0.5 }}>
          <Faqs />
        </Grid>

        <Grid item xs={12} sm={12} md={4} justifyContent='center' alignItems='center' sx={{ p: 0.5 }}>
          <Contact />
        </Grid>
      </Grid>

      <Copyright variant="h6" component="h6" sx={{ mt: 5, color: "white" }} />
    </Box>


  );
}