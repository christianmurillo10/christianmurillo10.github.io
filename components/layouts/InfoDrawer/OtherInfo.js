import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { otherInformations } from '../../../shared//mock-data';

export default function OtherInfo() {
  return (
    <Box sx={{ padding: '265px 30px 15px 30px' }}>
      {otherInformations.map((val, index) => (
        <Grid item xs={12} key={index}>
          <Grid container>
            <Grid item xs={6} md={8}>
              <Typography variant='caption' color='text.primary'>
                {val.name}
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} sx={{ textAlign: 'end' }}>
              <Typography variant='caption' color='text.secondary'>
                {val.value}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};