import { useState } from 'react';

import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { portfolioTabs } from '../../shared/mock-data';

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

export default function ProjectTabs({ projectRef }) {
  const [value, setValue] = useState("all");
  const [activateTab, setActivateTab] = useState(false);

  setTimeout(() => {
    setActivateTab(true)
  }, 100)

  const handleChange = (event, newValue) => {
    projectRef.current.handleCategorizedData(newValue);
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
    >
      {activateTab && (
        portfolioTabs.map((val, index) => (
          <StyledTab key={index} value={val.value} label={val.name} />
        ))
      )}
    </Tabs>
  );
};