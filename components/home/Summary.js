import NextLink from 'next/link';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { summary } from '../../shared/mock-data';

export default function Summary() {
  return (
    <Grid container spacing={4} sx={{ pb: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Summary</strong>
        </Typography>
      </Grid>
      {summary.map((val, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography gutterBottom variant="h6">
                {val.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.description}
              </Typography>
            </CardContent>
            <CardActions>
              <NextLink href="/contact" style={{ textDecoration: 'none', }}>
                <Button size="small">Contact Now</Button>
              </NextLink>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}