import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import slider1 from '../../../images/carousel-1.png';
import slider2 from '../../../images/carousel-2.png';
import slider3 from '../../../images/carousel-3.png';
import slider4 from '../../../images/carousel-4.png';
import slider5 from '../../../images/carousel-5.png';
import './OurWorks.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const OurWorks = () => {
 
    return (
    <section className="slider-container img-fluid">
      <h2 className="text-center text-white pt-5 ">Here are some <span style={{color:'#7AB259'}}>of our works</span></h2>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true}}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
        <SwiperSlide><h3>slider1</h3>
          <img class="img-fluid" src={slider1} alt=""/>
        </SwiperSlide>
        <SwiperSlide><h3>slider2</h3>
          <img class="img-fluid" src={slider2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <h3>slider3</h3>
          <img class="img-fluid" src={slider3} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <h3>slider4</h3>
          <img class="img-fluid" src={slider4} alt=""/>
        </SwiperSlide>
        <SwiperSlide><h3>slider 5</h3>
          <img class="img-fluid" src={slider5} alt=""/>
        </SwiperSlide>
      
      ...
    </Swiper>
    </section>
    );
};

export default OurWorks;