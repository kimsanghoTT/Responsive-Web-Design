import React, { useEffect, useState } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const handleSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
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

  useEffect(() => {
    gsap.fromTo(
      ".main-bg-overlay-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }
    );
  }, []);

  return (
    <>
      <div className={`overlay-film ${openSearchBar ? "active" : ""}`}></div>
      <div id="wrapper">
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
                <a href="/">Login</a>
              </span>
              <span>
                <a href="/">Signup</a>
              </span>
              <span>
                <button onClick={handleSearchBar}></button>
              </span>
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

        <section className="section-main-bg section01">
          <div className="main-bg-overlay-text">
            <p>
              무한한 상상력, 빛으로 펼쳐지는 시각적 서정 <br />
              <span>Visual Poetry</span>에서 경험하세요.
            </p>
          </div>
        </section>
        <div className="inner-box">
          <section className="section-gallery section02">
            <div className="section-title">
              <h2>새로운 영감</h2>
              <span>
                미래 예술의 방향을 제시하는 선구적인 작품들을 만나보세요
              </span>
            </div>
            <div className="card-section">
              <div className="card-item gallery-item">
                <a href="/">
                  <figure className="card-img">
                    <img
                      src="../img/web/section01_content01.png"
                      alt="content01"
                    />
                  </figure>
                  <div className="card-text">
                    <span className="card-title">
                      빛의 춤: 실루엣이 그리는 미지의 형태
                    </span>
                    <div className="card-disc">
                      <p>
                        디지털 빛의 흐름이 인간의 형상과 만나 새로운 시각적
                        내러티브를 창조합니다.
                      </p>
                      <p>
                        기술과 예술의 경계에서 펼쳐지는 몰입형 경험을
                        탐색합니다.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="card-item gallery-item">
                <a href="/">
                  <figure className="card-img">
                    <img
                      src="../img/web/section01_content02.png"
                      alt="content02"
                    />
                  </figure>
                  <div className="card-text">
                    <span className="card-title">
                      시선이 닿는 곳: 무한의 통로
                    </span>
                    <div className="card-disc">
                      <p>
                        강렬한 네온 빛이 공간을 가득 채우며 보는 이를 미지의
                        세계로 이끕니다.
                      </p>
                      <p>
                        색채와 빛의 조화가 만들어내는 시각적 판타지를 경험해
                        보세요.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="card-item gallery-item">
                <a href="/">
                  <figure className="card-img">
                    <img
                      src="../img/web/section01_content03.png"
                      alt="content03"
                    />
                  </figure>
                  <div className="card-text">
                    <span className="card-title">
                      깨어진 경계: 인간과 디지털의 융합
                    </span>
                    <div className="card-disc">
                      <p>
                        인간의 형상에 디지털 파편이 스며들어, 존재의 새로운
                        의미를 탐구합니다.
                      </p>
                      <p>
                        현대 사회와 기술의 상호작용을 은유적으로 표현한
                        작품입니다.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="card-item gallery-item">
                <a href="/">
                  <figure className="card-img">
                    <img
                      src="../img/web/section01_content04.png"
                      alt="content04"
                    />
                  </figure>
                  <div className="card-text">
                    <span className="card-title">
                      픽셀 모나리자: 디지털로 다시 태어난 불멸의 미소
                    </span>
                    <div className="card-disc">
                      <p>
                        레오나르도 다빈치의 모나리자가 디지털 픽셀 아트로
                        재탄생했습니다.
                      </p>
                      <p>
                        시대를 초월한 예술적 가치를 현대적으로 재해석합니다.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="gallery-link-btn btn-section">
              <a href="/">
                <span>전체 보기</span>
              </a>
            </div>
          </section>
          <section className="section-interview section03">
            <div className="section-title interview-title">
              <h2>아티스트 인사이트</h2>
              <span>
                디지털 아트의 현재와 미래를 이끄는 아티스트들의 생생한 목소리
              </span>
            </div>
            <div className="interview-content">
              <p>
                여기, 상상력이 현실이 되고 코드가 예술이 되는 현장이 있습니다.
              </p>
              <p>
                그들이 작품을 통해 던지는 질문들, 창작 과정의 숨겨진 이야기,
                <br />
                그리고 기술과 예술에 대한 깊이 있는 통찰을 통해
                <br />
                여러분은 미처 알지 못했던 예술의 새로운 지평을 경험하게 될
                것입니다.
              </p>
              <p>
                아티스트들의 시선과 철학이 담긴 인터뷰를 통해
                <br />
                작품 너머에 존재하는 영감과 열정을 발견하고 다가올 예술의 미래를
                함께 그려보세요.
                <br />각 인터뷰는 단순한 정보 전달을 넘어, 여러분에게 깊은
                영감과 사색의 시간을 선사할 것입니다.
              </p>
            </div>
            <div className="interview-link-btn btn-section">
              <a href="/">
                <span>전체 보기</span>
              </a>
            </div>
            <figure className="interview-img">
              <div className="section02-img01"></div>
              <div className="section02-img02"></div>
            </figure>
            <div className="interview-section-sub-bg"></div>
          </section>
          <section className="section-news section04">
            <div className="section-title">
              <h2>디지털 아트 리포트</h2>
              <span>
                디지털 세계 속 예술과 기술의 교차점을 포착한 뉴스 아카이브
              </span>
            </div>
            <div className="card-section">
              <div className="card-item news-item">
                <a href="/">
                  <figure className="card-img">
                    <img
                      src="../img/web/section03_content01.png"
                      alt="content01"
                    />
                  </figure>
                  <div className="card-text">
                    <span className="card-title">
                      '초월적 몰입형 디지털 아트' 등장… 현실과 가상 허무는 새
                      랜드마크 될까
                    </span>
                    <div className="card-disc">
                      <p>
                        디지털아트 미술관 Visual Poetry의 몰입형 디지털 아트
                        조형물 '디지털 에테르'가 화제다.
                      </p>
                      <p>
                        현실과 가상을 넘나드는 듯한 신비로운 이 작품은 시민들의
                        폭발적인 관심을 받으며 새로운 예술적 랜드마크로 떠오르고
                        있다.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="card-item news-item">
                <a href="/">
                  <figure className="card-img">
                    <img
                      src="../img/web/section03_content02.png"
                      alt="content02"
                    />
                  </figure>
                  <div className="card-text">
                    <span className="card-title">
                      미지의 디지털 아트 전시, 관람객을 초현실적 공간으로
                      초대하다
                    </span>
                    <div className="card-disc">
                      <p>
                        보랏빛 터널 형태의 몰입형 디지털 아트 전시가 관람객들을
                        초현실적 공간으로 이끌며 큰 화제를 모으고 있다.
                      </p>
                      <p>
                        빛과 색채의 변화를 통해 시각적 경험을 극대화하며 새로운
                        예술적 감동을 선사하고 있다.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="card-item news-item">
                <a href="/">
                  <figure className="card-img">
                    <img
                      src="../img/web/section03_content03.png"
                      alt="content03"
                    />
                  </figure>
                  <div className="card-text">
                    <span className="card-title">
                      '빛의 마술사' 제임스 터렐, 서울을 빛으로 물들이다…
                    </span>
                    <div className="card-disc">
                      <p>
                        세계적인 '빛의 예술가' 제임스 터렐의 몰입형 작품이
                        서울에 전시되어 강렬한 보랏빛으로 공간을 채우며
                        관람객에게 초현실적인 경험을 선사하고 있다.
                      </p>
                      <p>
                        빛을 통해 감각과 인식을 확장시켜 현대인들에게 새로운
                        예술적 휴식과 사색의 시간을 제공한다.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="card-item news-item">
                <a href="/">
                  <figure className="card-img">
                    <img
                      src="../img/web/section03_content04.png"
                      alt="content04"
                    />
                  </figure>
                  <div className="card-text">
                    <span className="card-title">
                      '무한의 우주'를 담다…관객을 압도하는 몰입형 미디어 아트展
                      개막
                    </span>
                    <div className="card-disc">
                      <p>
                        서울의 한 갤러리에서 무한한 우주를 담아낸 듯한 몰입형
                        미디어 아트 전시가 개막해 큰 호응을 얻고 있다.
                      </p>
                      <p>
                        빛의 입자들이 쏟아지는 공간과 바닥의 원형 조형물들이
                        어우러져 관람객들에게 시각적으로 압도적인 경험을
                        선사하고 있다.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="news-link-btn btn-section">
              <a href="/">
                <span>전체 보기</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
