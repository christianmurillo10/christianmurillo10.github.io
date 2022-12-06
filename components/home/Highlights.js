import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { highlights } from '../../shared//mock-data';

const PaperHighlight = styled(Paper)(({ theme }) => ({
  background: 'none',
  height: 70,
  display: 'flex',
  alignItems: 'center'
}));

export default function Highlights() {
  return (
    <Grid container spacing={2}>
      {highlights.map((val, index) => (
        <Grid item xs={6} md={3} key={index}>
          <PaperHighlight elevation={0}>
            <Typography variant="h5" color="primary" gutterBottom sx={{ pr: 2 }}>
              <strong>{val.counter}</strong>
            </Typography>
            <Typography variant="subtitle2" color="secondary" gutterBottom>
              {val.text}
            </Typography>
          </PaperHighlight>
        </Grid>
      ))}
    </Grid>
  );
}