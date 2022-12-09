import { useRef } from 'react';
import Head from 'next/head';

import { styled, createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';

import InfoAppBar from './InfoAppBar';
import InfoDrawer from './InfoDrawer';
import InfoNavDrawer from './InfoNavDrawer';

import { seoMetadata } from '../../shared/mock-data';

const Footer = (props) => {
  return (
    <Paper sx={{ mt: 4 }}>
      <Typography variant='body2' color='text.secondary' {...props} sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2
      }}>
        {`© ${new Date().getFullYear()} `}
        {'Christian Murillo'}
      </Typography>
    </Paper>
  );
};

const Main = styled(Box)(({ theme }) => ({
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  flexGrow: 1,
  height: '100vh',
  background: '#1e1e28',
  position: 'relative'
}));

// const MainBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   backgroundImage: 'url("/images/background.jpg")',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   opacity: '0.1',
//   height: '400px',
//   width: '100%',
// }));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFC107',
    },
    secondary: {
      main: '#FAFAFC',
    },
    background: {
      default: '#191923',
      paper: '#20202a'
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: ['"Viga"', 'Open Sans'].join(',')
  }
});

export default function Layouts({ title, children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const infoRef = useRef();
  const infoNavRef = useRef();

  return (
    <ThemeProvider theme={darkTheme}>
      <Box maxWidth='xl' sx={{ display: 'flex', margin: '0 auto' }}>
        <CssBaseline />
        <Head>
          <title>{`${title} - ${seoMetadata.title}`}</title>
          <meta name="description" content={seoMetadata.description} key={seoMetadata.key} />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <InfoDrawer ref={infoRef} isMobile={isMobile} />
        <Main component='main'>
          {isMobile ? (<InfoAppBar infoRef={infoRef} infoNavRef={infoNavRef} />) : null}
          {/* <MainBackground/> */}
          <Box sx={{ mx: isMobile ? 2 : 4, pt: isMobile ? 10 : 4 }}>
            <Zoom in={true}>
              {children}
            </Zoom>
            <Footer sx={{ pt: 4 }} />
          </Box>
        </Main>
        <InfoNavDrawer ref={infoNavRef} />
      </Box>
    </ThemeProvider>
  );
}