import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';

import { projects } from '../../shared/mock-data';

const CustomImageListItem = styled(ImageListItem)(({ theme }) => ({
  '& img': {
    opacity: '0.5 !important',
    '&:hover': {
      opacity: '1 !important',
      transition: '0.55s ease-in-out',
    }
  }
}));

export default forwardRef(function Projects({ projectDetailsRef }, ref) {
  const [data, setData] = useState([]);

  useImperativeHandle(ref, () => ({
    handleCategorizedData(val) {
      handleCategorizedData(val);
    }
  }));

  useEffect(() => {
    handleCategorizedData("all");
  }, []);

  const handleCategorizedData = (category) => {
    let projectData = projects;

    if (category !== "all") {
      projectData = projects.filter(val => val.category === category);
    }

    setData(projectData);
  };

  return (
    <ImageList variant="quilted" gap={20} rowHeight={250}>
      {data && data.map((item, index) => (
        <CustomImageListItem key={index}>
          <img
            src={item.src[0]}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.description}
            actionIcon={
              <Tooltip title="More Details">
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  onClick={e => projectDetailsRef.current.handleOpen(item)}
                >
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            }
          />
        </CustomImageListItem>
      ))}
    </ImageList>
  );
});