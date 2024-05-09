import React from 'react';
import "swiper/css"
import "swiper/css/pagination"
import "./sliderImg.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Scrollbar} from "swiper/modules";

function SliderImg({arrImgs, imgs, newClass}) {
   return (
       <Swiper
           className={`sliderImgs ${newClass}`}
           modules={[Scrollbar, Pagination]}
           slidesPerView={1}
           breakpoints={{
              768: {
                 slidesPerView: 3
              }
           }}
           pagination={{clickable: true}}
       >
          {arrImgs.map(item =>
              <SwiperSlide key={item}>
                 <img src={`/rent-a-car/img/${imgs.directory}/id_${imgs.id}/${item}${imgs.end}`}/>
              </SwiperSlide>
          )}
       </Swiper>
   );
}

export default SliderImg;