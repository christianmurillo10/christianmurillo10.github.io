import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { educations } from '../../shared//mock-data';

export default function Education() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Education</strong>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {educations.map((val, index) => (

            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                {(index + 1) !== educations.length ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ padding: 2 }}>
                  <CardContent>
                    <Typography variant="body2">
                      <strong>{val.school}</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.course}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.batch}
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
    </Grid>
  );
}