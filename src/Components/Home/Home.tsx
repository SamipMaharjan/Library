import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import vincent from "../../Assets/3005.jpg";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import LatestProducts from "./LatestProducts";
import { Link, Navigate } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-56">
          <h1 className="text-xl text-center bg-orange-600">Genres</h1>
          <ul className="">
            <li className="py-1">Fiction</li>
            <li className="py-1">Non-Fiction</li>
            <li className="py-1">Fantasy</li>
            <li className="py-1">Romance</li>
            <li className="py-1">Comics</li>
            <li className="py-1">Classic Literature</li>
            <li className="py-1">Poetry</li>
          </ul>
        </div>

        <div className="lg:w-[50%] w-full">
          <Swiper
            spaceBetween={100}
            slidesPerView={1}
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
          </Swiper>
        </div>

        <div>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Save 40% Fantasy</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary" to="/product">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Save 35% on Fiction</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary" to="/product">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <LatestProducts />
      </div>
    </>
  );
}
