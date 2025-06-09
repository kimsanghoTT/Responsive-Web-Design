import gsap from "gsap";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const handleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    if (openSearchBar) {
      setOpenSearchBar(true);
      gsap.fromTo(
        ".search-bar-box.active",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 50 }
      );
    } else {
      gsap.fromTo(
        ".search-bar-box.active",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 0, onComplete: () => setOpenSearchBar(false) }
      );
    }
  }, [openSearchBar]);

  return (
    <>
      <div className={`overlay-film ${openSearchBar ? "active" : ""}`}></div>
      <header className="header-container">
        <div className="header-contents">
          <div className="logo">
            <h1>
              <a href="/">Visual Poetry</a>
            </h1>
          </div>
          <div className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <a href="/">Gallery</a>
              </li>
              <li className="header-nav-item">
                <a href="/">News</a>
              </li>
              <li className="header-nav-item">
                <a href="/">Interview</a>
              </li>
              <li className="header-nav-item">
                <a href="/">Community</a>
              </li>
              <li className="header-nav-item">
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="header-util">
            <span>
              <a href="/">Sign In</a>
            </span>
            <span className="search-btn">
              <button onClick={handleSearchBar}></button>
            </span>
          </div>
          <div className="menu-mobile">
            <span className="menu-btn" onClick={handleMobileMenu}></span>
          </div>
        </div>
      </header>
      {openSearchBar && (
        <div className={`search-bar-box ${openSearchBar ? "active" : ""}`}>
          <span className="close" onClick={handleSearchBar}></span>
          <input type="text" placeholder="검색" />
          <span className="search"></span>
        </div>
      )}
      {openMobileMenu && (
        <div className="mobile-menu">
          <span className="close-btn" onClick={handleMobileMenu}></span>
          <span className="login-btn">Sign In</span>
          <div className="mobile-nav">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <a href="/">Gallery</a>
              </li>
              <li className="mobile-nav-item">
                <a href="/">News</a>
              </li>
              <li className="mobile-nav-item">
                <a href="/">Interview</a>
              </li>
              <li className="mobile-nav-item">
                <a href="/">Community</a>
              </li>
              <li className="mobile-nav-item">
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="customer-service">
            <p className="cs-title">고객센터</p>
            <p className="cs-phone">Tel : <span>1234-5678</span></p>
            <p className="cs-operating">운영시간:평일 10시 - 18시(주말, 공휴일 휴무)</p>
            <p className="cs-text">고객센터 운영시간 외에는 1:1문의로 접수해 주시면 운영시간에 순차적으로 처리됩니다.</p>
            <a href="/" className="cs-link">1:1문의 바로가기</a>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
