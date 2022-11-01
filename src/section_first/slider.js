import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider(props) {
  return (
    <div className={`slider__wrap ${props.fonts}`}>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide img1">
            <div className="desc">
              <span>ALCOHOL</span>
              <h3>WEDDING SEASON</h3>
              <p>
                VARIETY OF DRINKS
                <br />
                세상에 아주 다양한 술들이 있습니다.
                <br /> 지금 만나러 가시죠
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide img2">
            <div className="desc">
              <span>ALCOHOL</span>
              <h3>WEDDING SEASON</h3>
              <p>
                VARIETY OF DRINKS
                <br />
                세상에 아주 다양한 술들이 있습니다.
                <br /> 지금 만나러 가시죠
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide img3">
            <div className="desc">
              <span>ALCOHOL</span>
              <h3>WEDDING SEASON</h3>
              <p>
                VARIETY OF DRINKS
                <br />
                세상에 아주 다양한 술들이 있습니다.
                <br /> 지금 만나러 가시죠
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
