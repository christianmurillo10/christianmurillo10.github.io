import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { aboutMe } from '../../shared//mock-data';

export default function AboutMe() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>My Journey</strong>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ padding: 2 }}>
          <CardContent sx={{ textAlign: 'justify' }}>
            {aboutMe.map((val, index) => (
              <Typography variant="subtitle1" paragraph key={index}>
                {val}
              </Typography>
            ))}
            <Typography variant="subtitle1">
              Visit my <Link href="https://linkedin.com/in/christianoroceomurillo" target="_blank" underline="none">LinkedIn</Link>, profile for more details.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}