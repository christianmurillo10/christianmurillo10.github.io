import { useRef } from 'react';

import Grid from '@mui/material/Grid';

import Layouts from '../components/layouts';
import ProjectTabs from '../components/portfolio/ProjectTabs';
import Projects from '../components/portfolio/Projects';
import ProjectDetailsModal from '../components/portfolio/ProjectDetailsModal';

export default function Portfolio() {
  const projectRef = useRef();
  const projectDetailsRef = useRef();

  return (
    <Layouts title="Portfolio">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProjectTabs projectRef={projectRef} />
          <Projects ref={projectRef} projectDetailsRef={projectDetailsRef} />
          <ProjectDetailsModal ref={projectDetailsRef} />
        </Grid>
      </Grid>
    </Layouts>
  );
}