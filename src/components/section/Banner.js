import React from "react";

const banTitle = {
  title: "술믈리에 이XX",
  desc: "더 다양한 정보는 구글링 해보시길 바랍니다.",
  link: "https://younghwan112.tistory.com/",
  cate: "배너 유형01",
};

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">{banTitle.title}</h3>
        <p className="desc">
          {banTitle.desc}
          <a href={`${banTitle.link}`} title="블로그로 이동">
            {banTitle.link}
          </a>
        </p>
        <span className="small">{banTitle.cate}</span>
      </div>
    </section>
  );
}

export default Banner;
