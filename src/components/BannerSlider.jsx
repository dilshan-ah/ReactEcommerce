import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import SlideOne from '../assets/1.png'
import SlideTwo from '../assets/2.png'
import SlideThree from '../assets/3.png'

const BannerSlider = () => {
  return (
    <>
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={SlideOne} className='w-full' alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide><img src={SlideTwo} className='w-full' alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src={SlideThree} className='w-full' alt="" srcset="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default BannerSlider