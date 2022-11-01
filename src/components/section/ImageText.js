import React from "react";

const itTitle = {
  cate: "이미지 텍스트 유형01",
  title: "다양한 술 종류 알아보기",
  dsec: "다양한 술의 종류들에 대해서 알아볼 수 있으며 그에 따른 전문 사이트입니다.",
  link: "/",
};

const itText = [
  {
    bgClass: "img1",
    link: "/",
    btnClass: "",
    title: "위스키 사이트",
  },
  {
    bgClass: "img2",
    link: "/",
    btnClass: "blue",
    title: "와인 사이트",
  },
];

const ItText = ({ bgClass, link, btnClass, title }) => {
  return (
    <div className={`imgText__img ${bgClass}`}>
      <a href={`${link}`} className={`${btnClass}`}>
        {title}
      </a>
    </div>
  );
};

function ImageText({ attr }) {
  return (
    <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]}`}>
      <h2 className="blind">유용한 사이트 살펴보기</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>{itTitle.cate}</span>
          <h3>{itTitle.title}</h3>
          <p>{itTitle.desc}</p>
          <ul>
            <li>
              <a href={`${itTitle.link}`}>위스키 사이트</a>
            </li>
            <li>
              <a href={`${itTitle.link}`}>와인 사이트</a>
            </li>
            <li>
              <a href={`${itTitle.link}`}>소주 사이트</a>
            </li>
            <li>
              <a href={`${itTitle.link}`}>맥주 사이트</a>
            </li>
            <li>
              <a href={`${itTitle.link}`}>막걸리 사이트</a>
            </li>
            <li>
              <a href={`${itTitle.link}`}>고량주 사이트</a>
            </li>
          </ul>
        </div>
        {itText.map((info) => (
          <ItText
            bgClass={info.bgClass}
            link={info.link}
            btnClass={info.btnClass}
            title={info.title}
          />
        ))}
        {/* <div className="imgText__img img1">
          <a href="/">위스키 사이트</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            와인 사이트
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default ImageText;
