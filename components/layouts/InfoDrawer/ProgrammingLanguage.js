import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

import { primaryProgrammingLanguages, secondaryProgrammingLanguages } from '../../../shared//mock-data';

export default function ProgrammingLanguage() {
  return (
    <>
      <Box sx={{ padding: '15px 30px' }}>
        {primaryProgrammingLanguages.map((val, index) => (
          <Box sx={{ mb: 1 }} key={index}>
            <Typography variant='caption' component='div' color='text.primary'>
              {val.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={val.value} />
              </Box>
              <Typography variant="caption" color="text.secondary">
                {`${val.value}%`}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Divider sx={{ margin: '0 30px' }} />
      <Box sx={{ padding: '15px 30px' }}>
        {secondaryProgrammingLanguages.map((val, index) => (
          <Box sx={{ mb: 1 }} key={index}>
            <Typography variant='caption' component='div' color='text.primary'>
              {val.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={val.value} />
              </Box>
              <Typography variant="caption" color="text.secondary">
                {`${val.value}%`}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};