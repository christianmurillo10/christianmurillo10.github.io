import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { techStacks } from '../../shared//mock-data';

const ImageWrapper = styled(Paper)(({ theme }) => ({
  background: 'none',
  textAlign: 'center',
  opacity: 0.6,
  WebkitTransition: '0.4s ease-in-out',
  transition: '0.4s ease-in-out',
  '&:hover': {
    opacity: 1,
  }
}));

export default function TechStack() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Technology Stacks</strong>
        </Typography>
      </Grid>
      {techStacks.map((val, index) => (
        <Grid item xs={4} md={2} key={index}>
          <ImageWrapper elevation={0}>
            <img height={80} alt={val.name} title={val.name} src={val.src} />
          </ImageWrapper>
        </Grid>
      ))}
    </Grid>
  );
}