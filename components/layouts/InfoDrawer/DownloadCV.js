import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';

export default function DownloadCV() {
  return (
    <Box sx={{ padding: '15px 30px 70px 30px' }}>
      <Link href="/files/ChristianMurilloCV.pdf" target="_blank" underline="none" download>
        <Box sx={{ display: 'flex' }}>
          <Typography
            variant='caption'
            color='text.secondary'
            sx={{
              '&:hover': {
                color: 'text.primary',
              },
            }}
          >
            <strong>DOWNLOAD CV</strong>
          </Typography>
          <DownloadIcon fontSize='xsmall' color='primary' sx={{ ml: 1, mt: '2px' }} />
        </Box>
      </Link>
    </Box>
  );
};