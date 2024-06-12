import Grid from "@mui/material/Grid";
import Image from "next/image";
// adding titile and subtitle for hero baner 
import Typography from "@mui/material/Typography";
// for scroll down arrow in mobile devie in hero banner
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const Hero = ({imgSrc, imgAlt, title, subtitle}) => {
    return ( 
        <>
        <Grid
            component="section"
            container
            sx={{
                position: `relative`,
                height: "100vh",
                width: `100vw`,
                overflow: `hidden`,
                zIndex: -100,
                mb: 15,
            }}
         >
         <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
       </Grid>
       {/* adding overlay color to home-hero image  and adding title and subtitle to the hero banner home page*/}
       <Grid
            container
            sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0, .7)",
            }}
            item
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            >
            <Typography
                        variant="h1"
                        align="center"
                        gutterBottom
                        sx={{
                        color: "secondary.main",
                        fontWeight: 400,
                            }}
                        >
                    {title}
            </Typography>
            <Typography
                        component="p"
                        variant="h3"
                        align="center"
                        color="common.white"
                        sx={{
                        mb: 10,
                        }}
                    >
                {subtitle}
            </Typography>
            <Typography component="p" variant="h6" color="secondary" gutterBottom>
                Scroll
                </Typography>
                <ArrowDownward fontSize="large" color="secondary" />
        </Grid>

</>
    );
}
 
export default Hero;