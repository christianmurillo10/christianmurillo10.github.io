import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

import { otherKnowledges } from '../../../shared/mock-data';

export default function OtherKnowledge() {
  return (
    <Box sx={{ padding: '15px 30px', whiteSpace: 'normal' }}>
      {otherKnowledges.map((val, index) => (
        <Box sx={{ display: 'flex' }} key={index}>
          <CheckIcon fontSize='xsmall' color='primary' sx={{ mr: 1 }} />
          <Typography variant="caption" color="text.secondary">{val}</Typography>
        </Box>
      ))}
    </Box>
  );
};