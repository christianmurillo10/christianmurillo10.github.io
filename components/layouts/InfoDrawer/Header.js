import { useState } from 'react';
import NextLink from 'next/link';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import Zoom from '@mui/material/Zoom';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';

import { informations } from '../../../shared/mock-data';

const DrawerHeader = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background: 'linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)',
  height: 250,
  width: '100%',
  padding: '30px',
  lineHeight: 0,
  borderRadius: 0,
  whiteSpace: 'normal'
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
  boxShadow: 'none',
};

export default function Header({ isMobile, handleOpen }) {
  const [openAvatarModal, setOpenAvatarModal] = useState(false);

  const handleOpenAvatarModal = () => setOpenAvatarModal(true);
  const handleCloseAvatarModal = () => setOpenAvatarModal(false);

  return (
    <>
      <DrawerHeader elevation={0}>
        {isMobile && (<IconButton onClick={e => handleOpen(false)} sx={{ position: 'absolute', top: 0, right: 0, margin: 1 }}>
          <CloseIcon />
        </IconButton>)}
        <Avatar
          alt={informations.name}
          src={informations.image_path}
          sx={{
            width: 90,
            height: 90,
            margin: '0 auto',
            marginBottom: '15px',
            cursor: 'pointer',
            '&:hover': {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          onClick={handleOpenAvatarModal}
        />
        <NextLink href='/' passHref style={{ textDecoration: 'none' }}>
          <Typography variant='body2' color='text.primary' gutterBottom sx={{ cursor: 'pointer' }}>
            <strong>{informations.name}</strong>
          </Typography>
        </NextLink>
        <Typography variant='caption' color='text.secondary'>
          {informations.job_title}
        </Typography>
      </DrawerHeader>

      <Modal
        open={openAvatarModal}
        onClose={handleCloseAvatarModal}
      >
        <Box sx={style}>
          <Zoom in={openAvatarModal} style={{ transitionDelay: openAvatarModal ? '100ms' : '0ms' }}>
            <img src={informations.image_path} height={500} width='auto' />
          </Zoom>
        </Box>
      </Modal>
    </>
  );
};