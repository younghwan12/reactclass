import React from "react";

// rfce작성후 가운데에 넣기
// components 안에는 파일 대문자로 시작
// 메인에 가서 import

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            alcohol <em>journalist</em>
          </a>
        </div>
        <nav className="header__menu">
          <ul>
            <li className="active">
              <a href="#imageType">WHISKEY</a>
            </li>
            <li>
              <a href="#imgTextType">SITE</a>
            </li>
            <li>
              <a href="#cardType">BEER</a>
            </li>
            <li>
              <a href="#bannerType">BANNER</a>
            </li>
            <li>
              <a href="#textType">FOOD</a>
            </li>
          </ul>
        </nav>
        <div className="header__member">
          <a href="/">Log in</a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
