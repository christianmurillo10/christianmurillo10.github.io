import Grid from '@mui/material/Grid';

import Layouts from '../components/layouts';
import ImageList from '../components/vlogs/ImageList';

export default function Vlogs() {
  return (
    <Layouts title="Vlogs">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ImageList />
        </Grid>
      </Grid>
    </Layouts>
  );
}