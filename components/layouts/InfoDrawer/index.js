import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Header from './Header';
import OtherInfo from './OtherInfo';
import Language from './Language';
import ProgrammingLanguage from './ProgrammingLanguage';
import OtherKnowledge from './OtherKnowledge';
import DownloadCV from './DownloadCV';
import Footer from './Footer';

const drawerWidth = 290;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      boxSizing: 'border-box',
      borderRight: 'none',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(0),
      }),
      [theme.breakpoints.down('md')]: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  })
);

const MobileDrawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    background: theme.palette.background.paper
  },
}));

export default forwardRef(function InfoDrawer({ isMobile }, ref) {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    handleOpen() {
      setOpen(true);
    }
  }));

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const handleOpen = (val) => setOpen(val);

  const DrawerContent = () => (
    <Box
      sx={{
        height: '100vh',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <Header isMobile={isMobile} handleOpen={handleOpen} />
      <OtherInfo />
      <Divider sx={{ margin: '0 30px' }} />
      <Language />
      <Divider sx={{ margin: '0 30px' }} />
      <ProgrammingLanguage />
      <Divider sx={{ margin: '0 30px' }} />
      <OtherKnowledge />
      <Divider sx={{ margin: '0 30px' }} />
      <DownloadCV />
      <Footer />
    </Box>
  );

  return (
    <>
      {isMobile ?
        <MobileDrawer
          anchor='left'
          open={open}
        >
          <DrawerContent />
        </MobileDrawer>
        :
        <Drawer variant='permanent' open={open}>
          <DrawerContent />
        </Drawer>
      }
    </>
  );
});