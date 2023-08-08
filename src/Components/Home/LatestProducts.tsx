import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import vincent from "../../Assets/3005.jpg";

export default function LatestProducts() {
  return (
    <>
      <div>Latest Products</div>
      <div className=""></div>
      <Swiper
        spaceBetween={15}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img src={vincent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vincent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vincent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vincent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vincent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vincent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vincent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vincent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vincent} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
