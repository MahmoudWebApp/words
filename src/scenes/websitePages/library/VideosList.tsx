import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const VideosList = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      <SwiperSlide><iframe width="380" height="250" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLPljD46E7o2D9TSNoowj4iP0GyhInK_gi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></SwiperSlide>
      <SwiperSlide><iframe width="380" height="250" src="https://www.youtube-nocookie.com/embed/BNo4xIoSR34" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></SwiperSlide>
      <SwiperSlide><iframe width="380" height="250" src="https://www.youtube-nocookie.com/embed/BNo4xIoSR34" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></SwiperSlide>
      <SwiperSlide><iframe width="380" height="250" src="https://www.youtube-nocookie.com/embed/BNo4xIoSR34" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></SwiperSlide>
      <SwiperSlide><iframe width="380" height="250" src="https://www.youtube-nocookie.com/embed/BNo4xIoSR34" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></SwiperSlide>
    </Swiper>

  )
}

export default VideosList