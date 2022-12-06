import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function GetInTouch() {
  return (
    <Grid container spacing={4} sx={{ pb: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Get In touch</strong>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <Box
              component="form"
              noValidate
              autoComplete="off"
            >
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField fullWidth placeholder="Name" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth placeholder="Email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth placeholder="Message" multiline rows={5} />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained">Send Message</Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}