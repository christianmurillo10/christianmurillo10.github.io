import NextLink from 'next/link';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { TypeAnimation } from 'react-type-animation';

const CardBanner = styled(Card)(({ theme }) => ({
  backgroundImage: 'url("/images/background.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: 40,
  width: '100%',
  height: '350px',
  [theme.breakpoints.down('lg')]: {
    padding: 5,
    height: 'auto',
    textAlign: 'center',
  },
}));

export default function Banner() {
  return (
    <CardBanner>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={9}>
            <Typography variant="h3" color="text.primary">
              <strong>Discover my Amazing Adventure!</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" color="primary" component="span">
              {'<code> '}
            </Typography>
            <TypeAnimation
              sequence={[
                'I build websites and web applications.',
                2000,
                'I build custom content management system (CMS).',
                2000,
                'I build backend APIs and real-time socket.',
                2000,
                'I build and design database.',
                2000,
              ]}
              wrapper="span"
              speed={200}
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '20px' }}
            />
            <Typography variant="h6" color="primary" component="span">
              {' </code>'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <NextLink href="/about" style={{ textDecoration: 'none', }}>
              <Button variant="contained">Explore Now!</Button>
            </NextLink>
          </Grid>
        </Grid>
      </CardContent>
    </CardBanner>
  );
}