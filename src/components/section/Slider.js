import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderText = [
  {
    imgClass: "img1",
    cate: "ALCOHOL",
    title: "DRINKS",
    desc1: "VARIETY OF DRINK",
    desc2: "세상에 아주 다양한 술들이 있습니다.",
    desc3: "지금 만나러 가시죠",
  },
  {
    imgClass: "img2",
    cate: "ALCOHOL",
    title: "DRINKS",
    desc1: "VARIETY OF DRINK",
    desc2: "세상에 아주 다양한 술들이 있습니다.",
    desc3: "지금 만나러 가시죠",
  },
  {
    imgClass: "img3",
    cate: "ALCOHOL",
    title: "DRINKS",
    desc1: "VARIETY OF DRINK",
    desc2: "세상에 아주 다양한 술들이 있습니다.",
    desc3: "지금 만나러 가시죠",
  },
];

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
              <span>{sliderText.cate}</span>
              <h3>{sliderText.title}</h3>
              <p>
                {sliderText.desc1}
                <br />
                {sliderText.desc2}
                <br /> {sliderText.desc3}
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
              <span>{sliderText.cate}</span>
              <h3>{sliderText.title}</h3>
              <p>
                {sliderText.desc1}
                <br />
                {sliderText.desc2}
                <br /> {sliderText.desc3}
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
              <span>{sliderText.cate}</span>
              <h3>{sliderText.title}</h3>
              <p>
                {sliderText.desc1}
                <br />
                {sliderText.desc2}
                <br /> {sliderText.desc3}
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
