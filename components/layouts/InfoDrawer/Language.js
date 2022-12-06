import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import { languages } from '../../../shared//mock-data';

export default function Language() {
  return (
    <Box sx={{ padding: '30px' }}>
      <Grid item xs={12}>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
        >
          {languages.map((val, index) => (
            <Grid item xs={4} key={index}>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant='determinate' size={50} value={val.value} />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant='caption' component='div' color='text.secondary'>
                    {`${val.value}%`}
                  </Typography>
                </Box>
              </Box>
              <Typography variant='caption' component='div' color='text.primary'>
                {val.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};