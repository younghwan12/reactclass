import React from "react";


function Text({ attr }) {
  return (
    <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]}`}>
      <span className="blind">텍스트 유형01</span>
      <h2 className="mb70">술과 잘맞는 음식궁합</h2>
      <div className={`text__inner ${attr[2]}`}>
        <div className="text t1">
          <h3 className="text__title">위스키</h3>
          <p className="text__desc">
            어떤 음식과도 궁합이 맞는 위스키입니다. 온더락 잔에 다크 초콜릿과
            함께해도 좋고, 과일과 함께해도 좋은 음식입니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">와인</h3>
          <p className="text__desc">
            와인엔 치즈라는 말이 있을정도로 궁합이 잘맞지만 사실 다른음식들과도 잘 맞습니다. 레드와인은 스테이크와 함께 화이트와인은
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">소주</h3>
          <p className="text__desc">
          소주하면 생각나는 음식은 한국인이라면 삼겹살일겁니다. 삼쏘는 최고의 조합이며, 사실 어느 음식점을 가더라도 판매하고 있을정도로
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">맥주</h3>
          <p className="text__desc">
          소주하면 생각나는 음식은 한국인이라면 삼겹살일겁니다. 삼쏘는 최고의 조합이며, 사실 어느 음식점을 가더라도 판매하고 있을정도로
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">막걸리</h3>
          <p className="text__desc">
          비오는날 생각나는 주류로, 막걸리는 무조건 파전류와 함께해야하 한다는 인식이 있습니다. 파전이 없는 막걸리는 상상할 수 없습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">고량주</h3>
          <p className="text__desc">
          흔히 중식당에서 회식을 하면 볼수있는 주류로, 중국 술이기 때문에 중국음식들과 조합이 좋습니다, 유산슬, 깐풍기, 탕수육등등 생각나네요.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
