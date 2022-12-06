import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { contactInformationAddress, contactInformationSocial } from '../../shared//mock-data';

export default function ContactInformation() {
  return (
    <Grid container spacing={4} sx={{ pb: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Contact Information</strong>
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <Grid container>
              {contactInformationAddress.map((val, index) => (
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }} key={index}>
                  <Typography variant="caption"><strong>{val.name}:</strong></Typography>
                  <Typography variant="caption" color='text.secondary'>{val.value}</Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <Grid container>
              {contactInformationSocial.map((val, index) => (
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }} key={index}>
                  <Typography variant="caption"><strong>{val.name}:</strong></Typography>
                  <Typography variant="caption" color='text.secondary'>{val.value}</Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}