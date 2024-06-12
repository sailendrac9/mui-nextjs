import Container from "@mui/material/Container";
// import hero-banner
import Hero from '@components/Hero'
// about-section
import SectionAbout from "@components/SectionAbout";
// service section
import SectionImage from "@components/SectionImage";
// review section
import SectionReview from "@components/SectionReview";
// navigationcard
import Grid from "@mui/material/Grid";
import NavigationCard from "@components/NavigationCard";

const Homepage = () => {
  return (
    <>
    {/* <Hero imgSrc="/home-hero.jpg" imgAlt="satified woman eating in restaurant"/> */}
    <Hero
        imgSrc="/home-hero.jpg"
        imgAlt="Home hero banner smarkone"
        title="Grow Your Business"
        subtitle="Best It Company in Nepal"
      />
      <SectionAbout imgSrc="/about-section.svg" imgAlt="About Section"/>
      <SectionImage imgSrc="/programming.svg" imgAlt="Service Section" />
      <SectionReview/>
      <SectionImage imgSrc="/sushi.jpg" imgAlt="fusion sushi" />

      <Container maxWidth="md" sx={{ my: 15 }}>
          <Grid container spacing={2}>
            <Grid container item justifyContent="center" xs={12} md={6}>
              <NavigationCard
                  imgSrc="/menu-sm.jpg"
                  imgAlt="food menu"
                  title="Menu"
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
                  pagePath="./menu"
                  ctaText="Check Out"
                />
            </Grid>
            <Grid container item justifyContent="center" xs={12} md={6}>
                <NavigationCard
                imgSrc="/catering-sm.jpg"
                imgAlt="catering"
                title="Catering"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
                pagePath="./catering"
                ctaText="Find Out"
              />
            </Grid>
          </Grid>
      </Container>

    <Container maxWidth="sm">
    <h1>Home Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
        cupiditate! Odio, aliquam soluta vel, eum illum corrupti incidunt nobis
        porro mollitia itaque reiciendis. Aut, minus dolore! Delectus pariatur
        praesentium dolorem? In at, quibusdam vero eligendi provident veritatis
        ipsam suscipit nisi similique nulla est magni harum. Cumque maiores eos
        alias, aperiam ea deleniti voluptatem culpa a perferendis accusantium,
        necessitatibus velit laborum. Molestias, reprehenderit accusantium. Ad
        ipsa maiores, animi labore est voluptate eos aperiam iste adipisci sed
        dolor consequatur dolore provident tenetur ipsum! Velit laudantium
        excepturi accusantium numquam, similique nemo repellat impedit.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
        cupiditate! Odio, aliquam soluta vel, eum illum corrupti incidunt nobis
        porro mollitia itaque reiciendis. Aut, minus dolore! Delectus pariatur
        praesentium dolorem? In at, quibusdam vero eligendi provident veritatis
        ipsam suscipit nisi similique nulla est magni harum. Cumque maiores eos
        alias, aperiam ea deleniti voluptatem culpa a perferendis accusantium,
        necessitatibus velit laborum. Molestias, reprehenderit accusantium. Ad
        ipsa maiores, animi labore est voluptate eos aperiam iste adipisci sed
        dolor consequatur dolore provident tenetur ipsum! Velit laudantium
        excepturi accusantium numquam, similique nemo repellat impedit.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
        cupiditate! Odio, aliquam soluta vel, eum illum corrupti incidunt nobis
        porro mollitia itaque reiciendis. Aut, minus dolore! Delectus pariatur
        praesentium dolorem? In at, quibusdam vero eligendi provident veritatis
        ipsam suscipit nisi similique nulla est magni harum. Cumque maiores eos
        alias, aperiam ea deleniti voluptatem culpa a perferendis accusantium,
        necessitatibus velit laborum. Molestias, reprehenderit accusantium. Ad
        ipsa maiores, animi labore est voluptate eos aperiam iste adipisci sed
        dolor consequatur dolore provident tenetur ipsum! Velit laudantium
        excepturi accusantium numquam, similique nemo repellat impedit.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
        cupiditate! Odio, aliquam soluta vel, eum illum corrupti incidunt nobis
        porro mollitia itaque reiciendis. Aut, minus dolore! Delectus pariatur
        praesentium dolorem? In at, quibusdam vero eligendi provident veritatis
        ipsam suscipit nisi similique nulla est magni harum. Cumque maiores eos
        alias, aperiam ea deleniti voluptatem culpa a perferendis accusantium,
        necessitatibus velit laborum. Molestias, reprehenderit accusantium. Ad
        ipsa maiores, animi labore est voluptate eos aperiam iste adipisci sed
        dolor consequatur dolore provident tenetur ipsum! Velit laudantium
        excepturi accusantium numquam, similique nemo repellat impedit.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
        cupiditate! Odio, aliquam soluta vel, eum illum corrupti incidunt nobis
        porro mollitia itaque reiciendis. Aut, minus dolore! Delectus pariatur
        praesentium dolorem? In at, quibusdam vero eligendi provident veritatis
        ipsam suscipit nisi similique nulla est magni harum. Cumque maiores eos
        alias, aperiam ea deleniti voluptatem culpa a perferendis accusantium,
        necessitatibus velit laborum. Molestias, reprehenderit accusantium. Ad
        ipsa maiores, animi labore est voluptate eos aperiam iste adipisci sed
        dolor consequatur dolore provident tenetur ipsum! Velit laudantium
        excepturi accusantium numquam, similique nemo repellat impedit.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
        cupiditate! Odio, aliquam soluta vel, eum illum corrupti incidunt nobis
        porro mollitia itaque reiciendis. Aut, minus dolore! Delectus pariatur
        praesentium dolorem? In at, quibusdam vero eligendi provident veritatis
        ipsam suscipit nisi similique nulla est magni harum. Cumque maiores eos
        alias, aperiam ea deleniti voluptatem culpa a perferendis accusantium,
        necessitatibus velit laborum. Molestias, reprehenderit accusantium. Ad
        ipsa maiores, animi labore est voluptate eos aperiam iste adipisci sed
        dolor consequatur dolore provident tenetur ipsum! Velit laudantium
        excepturi accusantium numquam, similique nemo repellat impedit.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
        cupiditate! Odio, aliquam soluta vel, eum illum corrupti incidunt nobis
        porro mollitia itaque reiciendis. Aut, minus dolore! Delectus pariatur
        praesentium dolorem? In at, quibusdam vero eligendi provident veritatis
        ipsam suscipit nisi similique nulla est magni harum. Cumque maiores eos
        alias, aperiam ea deleniti voluptatem culpa a perferendis accusantium,
        necessitatibus velit laborum. Molestias, reprehenderit accusantium. Ad
        ipsa maiores, animi labore est voluptate eos aperiam iste adipisci sed
        dolor consequatur dolore provident tenetur ipsum! Velit laudantium
        excepturi accusantium numquam, similique nemo repellat impedit.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
        cupiditate! Odio, aliquam soluta vel, eum illum corrupti incidunt nobis
        porro mollitia itaque reiciendis. Aut, minus dolore! Delectus pariatur
        praesentium dolorem? In at, quibusdam vero eligendi provident veritatis
        ipsam suscipit nisi similique nulla est magni harum. Cumque maiores eos
        alias, aperiam ea deleniti voluptatem culpa a perferendis accusantium,
        necessitatibus velit laborum. Molestias, reprehenderit accusantium. Ad
        ipsa maiores, animi labore est voluptate eos aperiam iste adipisci sed
        dolor consequatur dolore provident tenetur ipsum! Velit laudantium
        excepturi accusantium numquam, similique nemo repellat impedit.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
        cupiditate! Odio, aliquam soluta vel, eum illum corrupti incidunt nobis
        porro mollitia itaque reiciendis. Aut, minus dolore! Delectus pariatur
        praesentium dolorem? In at, quibusdam vero eligendi provident veritatis
        ipsam suscipit nisi similique nulla est magni harum. Cumque maiores eos
        alias, aperiam ea deleniti voluptatem culpa a perferendis accusantium,
        necessitatibus velit laborum. Molestias, reprehenderit accusantium. Ad
        ipsa maiores, animi labore est voluptate eos aperiam iste adipisci sed
        dolor consequatur dolore provident tenetur ipsum! Velit laudantium
        excepturi accusantium numquam, similique nemo repellat impedit.
       </p>
    </Container>
    </>
  );
};

export default Homepage;