import { useState, forwardRef, useImperativeHandle } from 'react';
import NextLink from 'next/link';

import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import * as Icon from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import {
  mainListItems,
  // secondaryListItems 
} from '../../shared/nav-list';

const drawerWidth = 220;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        borderRight: 'none',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
        }),
      },
    })
  },
);

const MobileDrawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    background: theme.palette.background.paper
  },
}));

const ListItemLink = styled(NextLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary
}));

const ListItem = ({ data }) => {
  const LabelIcon = Icon[data.icon];

  return (
    <ListItemLink href={data.path}>
      <ListItemButton title={data.name}>
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary={data.name} />
      </ListItemButton>
    </ListItemLink>
  )
};

export default forwardRef(function InfoNavDrawer(props, ref) {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useImperativeHandle(ref, () => ({
    handleOpen() {
      setOpen(true);
    }
  }));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const DrawerContent = () => (
    <>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
      <Divider />
      <List component='nav' dense={true}>
        {mainListItems.map((val, index) => (
          <ListItem key={index} data={val} />
        ))}
        {/* <Divider sx={{ my: 1 }} />
        <ListSubheader component="div" inset>
          Other Pages
        </ListSubheader>
        {secondaryListItems.map((val, index) => (
          <ListItem key={index} data={val} />
        ))} */}
      </List>
    </>
  );

  return (
    <>
      {isMobile ?
        <MobileDrawer
          anchor='right'
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