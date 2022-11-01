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
    address: "/",
  },
  {
    imgClass: "img2",
    cate: "ALCOHOL",
    title: "DRINKS",
    desc1: "VARIETY OF DRINK",
    desc2: "세상에 아주 다양한 술들이 있습니다.",
    desc3: "지금 만나러 가시죠",
    address: "/",
  },
  {
    imgClass: "img3",
    cate: "ALCOHOL",
    title: "DRINKS",
    desc1: "VARIETY OF DRINK",
    desc2: "세상에 아주 다양한 술들이 있습니다.",
    desc3: "지금 만나러 가시죠",
    address: "/",
  },
];

const SliderText = ({ imgClass, cate, title, desc1, desc2, desc3 }) => {
  return (
    <SwiperSlide>
      <div className={`swiper-slide ${imgClass}`}>
        <div className="desc">
          <span>{cate}</span>
          <h3>{title}</h3>
          <p>
            {desc1}
            <br />
            {desc2}
            <br /> {desc3}
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
  );
};

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
        {sliderText.map((slider) => (
          <SliderText
            imgClass={slider.imgClass}
            cate={slider.cate}
            title={slider.title}
            desc1={slider.desc1}
            desc2={slider.desc2}
            desc3={slider.desc3}
          />
        ))}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default Slider;
