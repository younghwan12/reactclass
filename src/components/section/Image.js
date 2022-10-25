import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap content__item ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>WHISKEY</h2>
      <p>평소에 흔히 볼수있는 위스키 리스트입니다.</p>
      <div className={`image__inner ${props.attr[2]}`}>
        <article className="image img1">
          <h3 className="image__title">JACKDANIELS</h3>
          <p className="image__desc">
            잭다니엘 블랙라벨입니다. 도수는 40도 최소 4년 숙성한 위스키로서,
            콜라를 섞어 잭콕으로 먹던가, 온더락잔에 얼음과 같이 드시면 됩니다.
            사실 맛은 없다.
          </p>
          <a className="image__btn" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">JAMESON</h3>
          <p className="image__desc">
            아일랜드 위스키 재임슨입니다. 레이디가가와 리아나가 사랑한 술로
            알려져 더욱 유명해졌으며, 하이볼과 샷으로 먹지만 스트레이트로 마실
            때 맛있는 술입니다.
          </p>
          <a className="image__btn yellow" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
