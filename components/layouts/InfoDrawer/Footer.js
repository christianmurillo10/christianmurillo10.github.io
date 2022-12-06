import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import * as Icon from '@mui/icons-material';

import { socialMedia } from '../../../shared//mock-data';

const DrawerFooter = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background: 'linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)',
  height: 50,
  width: '100%',
  padding: '0 30px',
  borderRadius: 0,
  bottom: 0
}));

const SocialMediaIcon = ({ data }) => {
  const LabelIcon = Icon[data.icon];

  return (
    <IconButton size='small' target='_blank' href={data.link}>
      <LabelIcon fontSize="inherit" />
    </IconButton>
  );
};

export default function Footer() {
  return (
    <DrawerFooter elevation={0}>
      <Box
        sx={{
          '& > :not(style)': {
            mt: 1,
            mr: 2
          },
        }}
      >
        {socialMedia.map((val, index) => (
          <SocialMediaIcon key={index} data={val} />
        ))}
      </Box>
    </DrawerFooter>
  );
};