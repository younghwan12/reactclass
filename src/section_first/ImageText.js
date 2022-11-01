import React from "react";

function ImageText({ attr }) {
  return (
    <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]}`}>
      <h2 className="blind">유용한 사이트 살펴보기</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>이미지 텍스트 유형01</span>
          <h3>다양한 술 종류 알아보기</h3>
          <p>
            다양한 술의 종류들에 대해서 알아볼 수 있으며 그에 따른 전문
            사이트입니다.
          </p>
          <ul>
            <li>
              <a href="/">위스키 사이트</a>
            </li>
            <li>
              <a href="/">와인 사이트</a>
            </li>
            <li>
              <a href="/">소주 사이트</a>
            </li>
            <li>
              <a href="/">맥주 사이트</a>
            </li>
            <li>
              <a href="/">막걸리 사이트</a>
            </li>
            <li>
              <a href="/">고량주 사이트</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">위스키 사이트</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            와인 사이트
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
