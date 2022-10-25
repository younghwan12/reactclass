import React from "react";

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">술믈리에 이XX</h3>
        <p className="desc">
          더 다양한 정보는 구글링 해보시길 바랍니다.
          <a href="https://younghwan112.tistory.com/" title="블로그로 이동">
            https://google.co.kr/
          </a>
        </p>
        <span className="small">배너 유형01</span>
      </div>
    </section>
  );
}

export default Banner;
