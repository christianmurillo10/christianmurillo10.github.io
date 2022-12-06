import Grid from '@mui/material/Grid';

import Layouts from '../components/layouts';
import AboutMe from '../components/about/AboutMe';
import WorkHistory from '../components/about/WorkHistory';
import Education from '../components/about/Education';

export default function About() {
  return (
    <Layouts title="About">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <AboutMe />
        </Grid>
        <Grid item xs={12} md={6}>
          <WorkHistory />
        </Grid>
        <Grid item xs={12} md={6}>
          <Education />
        </Grid>
      </Grid>
    </Layouts>
  );
}