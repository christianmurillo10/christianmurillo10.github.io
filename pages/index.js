import Grid from '@mui/material/Grid';

import Layouts from '../components/layouts';
import Banner from '../components/home/Banner';
import Highlights from '../components/home/Highlights';
import Summary from '../components/home/Summary';
import MotivationalQuotes from '../components/home/MotivationalQuotes';
// import Testimonials from '../components/home/Testimonials';
import TechStack from '../components/home/TechStack';

export default function Home() {
  return (
    <Layouts title="Home">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12}>
          <Highlights />
        </Grid>
        <Grid item xs={12}>
          <Summary />
        </Grid>
        {/* <Grid item xs={12}>
          <Testimonials />
        </Grid> */}
        <Grid item xs={12}>
          <MotivationalQuotes />
        </Grid>
        <Grid item xs={12}>
          <TechStack />
        </Grid>
      </Grid>
    </Layouts>
  );
}