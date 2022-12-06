import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { workHistories } from '../../shared//mock-data';

export default function WorkHistory() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Work History</strong>
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
          {workHistories.map((val, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                {(index + 1) !== workHistories.length ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ padding: 2 }}>
                  <CardHeader
                    title={
                      <Typography variant="body2">
                        <strong>{val.company}</strong>
                      </Typography>
                    }
                    subheader={
                      <Typography variant="body2" color="text.secondary">
                        {`${val.position} (${val.employment_date})`}
                      </Typography>
                    }
                  />
                  <CardContent>
                    <ul style={{ marginLeft: "-25px" }}>
                      {val.job_descriptions.map((job, indexJob) => (
                        <li key={indexJob}>
                          <Typography variant="body2" color="text.secondary">{job}</Typography>
                        </li>
                      ))}
                    </ul>
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