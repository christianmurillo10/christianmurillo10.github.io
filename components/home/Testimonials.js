import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { testimonials } from '../../shared//mock-data';

const CustomSwiper = styled(Swiper)(({ theme }) => ({
  '& .swiper-wrapper': {
    marginBottom: '30px !important',
  },
  '& .swiper-pagination-bullets.swiper-pagination-horizontal': {
    bottom: 0,
  },
  '& .swiper-pagination-bullet-active': {
    background: theme.palette.primary.main,
  },
}));

export default function Testimonials() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <strong>Testimonials</strong>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CustomSwiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((val, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ padding: 2 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      alt={val.title}
                      src={val.src}
                    />
                  }
                  title={val.title}
                  subheader={val.subheader}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                    {val.description}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </Grid>
    </Grid>
  );
}