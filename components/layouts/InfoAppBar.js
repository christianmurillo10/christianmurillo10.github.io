import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';

export default function InfoAppBar({ infoRef, infoNavRef }) {
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton onClick={e => infoRef.current.handleOpen()}>
          <MoreVertIcon />
        </IconButton>
        <IconButton onClick={e => infoNavRef.current.handleOpen()}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
} 