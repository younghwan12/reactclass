import React from "react";

function Card({ attr }) {
  return (
    <section id="cardType" className={`card__wrap ${attr[0]} ${attr[1]}`}>
      <h2>세계맥주 추천</h2>
      <p>편의점에서 보는 세계맥주 어떤걸 사야할지 모르시겠다구요?</p>
      <div className={`card_inner ${attr[2]}`}>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01_01.jpg" alt="축구 기초 강의" />
          </figure>
          <div className="card__body">
            <h3 className="tit">홉하우스13</h3>
            <p className="desc">
              맥주를 별로 선호하지 않는 제가 좋아하는 몇 안 되는 맥주입니다.
              쌉쌀하고 강한 향이 따라오는 진한 라거로써 안주가 필요 없이 술
              자체로 즐길수 있는 매력을 가지고있습니다.
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="66"
                  height="8"
                  viewBox="0 0 66 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M65.3535 4.34956C65.5465 4.15211 65.543 3.83555 65.3455 3.6425L62.128 0.496467C61.9305 0.303411 61.614 0.306968 61.4209 0.504411C61.2279 0.701855 61.2314 1.01842 61.4289 1.21147L64.2889 4.00794L61.4924 6.86797C61.2994 7.06541 61.3029 7.38198 61.5004 7.57503C61.6978 7.76809 62.0144 7.76453 62.2074 7.56709L65.3535 4.34956ZM1.00562 5.21902L65.0016 4.49997L64.9903 3.50003L0.994382 4.21909L1.00562 5.21902Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01_02.jpg" alt="드리블 기초 강의" />
          </figure>
          <div className="card__body">
            <h3 className="tit">기네스</h3>
            <p className="desc">
              호불호가 갈리는 기네스 흑맥주입니다. 탄산이 거의 없으며 쌉싸름
              하고 진한 흑맥주의 맛을 잘 느낄수 있는 매력을 가지고 있습니다.
              크리미한 거품을 빠트릴 순 없겠죠?
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="66"
                  height="8"
                  viewBox="0 0 66 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M65.3535 4.34956C65.5465 4.15211 65.543 3.83555 65.3455 3.6425L62.128 0.496467C61.9305 0.303411 61.614 0.306968 61.4209 0.504411C61.2279 0.701855 61.2314 1.01842 61.4289 1.21147L64.2889 4.00794L61.4924 6.86797C61.2994 7.06541 61.3029 7.38198 61.5004 7.57503C61.6978 7.76809 62.0144 7.76453 62.2074 7.56709L65.3535 4.34956ZM1.00562 5.21902L65.0016 4.49997L64.9903 3.50003L0.994382 4.21909L1.00562 5.21902Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01_03.jpg" alt="슈팅 기초 강의" />
          </figure>
          <div className="card__body">
            <h3 className="tit">하이네켄</h3>
            <p className="desc">
              네덜란드의 맥주 브랜드. 유럽뿐만 아니라 세계적으로 인지도와
              판매량에서 최상위 브랜드입니다. 소맥맛과 비슷하며 소맥을 좋아하는
              사람에게 추천합니다. 벌꿀향이 나는 것은 포인트!
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="66"
                  height="8"
                  viewBox="0 0 66 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M65.3535 4.34956C65.5465 4.15211 65.543 3.83555 65.3455 3.6425L62.128 0.496467C61.9305 0.303411 61.614 0.306968 61.4209 0.504411C61.2279 0.701855 61.2314 1.01842 61.4289 1.21147L64.2889 4.00794L61.4924 6.86797C61.2994 7.06541 61.3029 7.38198 61.5004 7.57503C61.6978 7.76809 62.0144 7.76453 62.2074 7.56709L65.3535 4.34956ZM1.00562 5.21902L65.0016 4.49997L64.9903 3.50003L0.994382 4.21909L1.00562 5.21902Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Card;
