import Grid from '@mui/material/Grid';

import Layouts from '../components/layouts';
import Information from '../components/contact/Information';
import GetInTouch from '../components/contact/GetInTouch';

export default function Contact() {
  return (
    <Layouts title="Contact">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Information />
        </Grid>
        <Grid item xs={12}>
          <GetInTouch />
        </Grid>
      </Grid>
    </Layouts>
  );
}