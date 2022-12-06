import { useState, forwardRef, useImperativeHandle } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CustomSwiper = styled(Swiper)(({ theme }) => ({
  '& .swiper-pagination-bullet-active': {
    background: theme.palette.primary.main,
  },
}));

export default forwardRef(function ProjectDetailsModal({ props }, ref) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  useImperativeHandle(ref, () => ({
    handleOpen(data) {
      handleOpen(data);
    }
  }));

  const handleOpen = (data) => {
    setOpen(true);
    setData(data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      {
        data ?
          <Card>
            <CardMedia>
              <CustomSwiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                {data.src.length > 0 && data.src.map((val, index) => (
                  <SwiperSlide key={index}>
                    <CardMedia
                      component="img"
                      image={val}
                    />
                  </SwiperSlide>
                ))}
              </CustomSwiper>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
              {
                data.tech_stacks ?
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Technology Stacks:</strong>
                    </Typography>
                    <ul style={{ marginTop: 0, marginLeft: "-25px" }}>
                      {data.tech_stacks.map((val, index) => (
                        <li key={index}>
                          <Typography variant="body2" color="text.secondary">{val}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                  : null
              }
            </CardContent>
          </Card>
          : null
      }
    </Dialog>
  );
});