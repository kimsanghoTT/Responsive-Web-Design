import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
gsap.registerPlugin(ScrollTrigger);

const Section02 = () => {
  useEffect(() => {
    const text = gsap.timeline({
      scrollTrigger: {
        trigger: ".section02",
        start: "top 60%",
      },
    });
    text
      .fromTo(
        ".section02 .section-title h2",
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.inOut",
        }
      )
      .fromTo(
        ".section02 .section-title span",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.inOut",
        }
      )
      .fromTo(
        ".gallery-link-btn",
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power1.inOut",
        }
      );
    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".section02",
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section className="section-gallery section02">
      <div className="section-title">
        <h2>새로운 영감</h2>
        <span>미래 예술의 방향을 제시하는 선구적인 작품들을 만나보세요</span>
      </div>
      <div className="card-section">
        <div className="display-web">
          <div className="card-item gallery-item">
            <a href="/">
              <figure className="card-img">
                <img
                  src="../../img/web/section02_content01.png"
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
                    기술과 예술의 경계에서 펼쳐지는 몰입형 경험을 탐색합니다.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="card-item gallery-item">
            <a href="/">
              <figure className="card-img">
                <img
                  src="../../img/web/section02_content02.png"
                  alt="content02"
                />
              </figure>
              <div className="card-text">
                <span className="card-title">시선이 닿는 곳: 무한의 통로</span>
                <div className="card-disc">
                  <p>
                    강렬한 네온 빛이 공간을 가득 채우며 보는 이를 미지의 세계로
                    이끕니다.
                  </p>
                  <p>
                    색채와 빛의 조화가 만들어내는 시각적 판타지를 경험해 보세요.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="card-item gallery-item">
            <a href="/">
              <figure className="card-img">
                <img
                  src="../../img/web/section02_content03.png"
                  alt="content03"
                />
              </figure>
              <div className="card-text">
                <span className="card-title">
                  깨어진 경계: 인간과 디지털의 융합
                </span>
                <div className="card-disc">
                  <p>
                    인간의 형상에 디지털 파편이 스며들어, 존재의 새로운 의미를
                    탐구합니다.
                  </p>
                  <p>
                    현대 사회와 기술의 상호작용을 은유적으로 표현한 작품입니다.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="card-item gallery-item">
            <a href="/">
              <figure className="card-img">
                <img
                  src="../../img/web/section02_content04.png"
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
                  <p>시대를 초월한 예술적 가치를 현대적으로 재해석합니다.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwiper display-pad"
          slidesPerView={2}
          spaceBetween={10}
        >
          <SwiperSlide>
            <div className="card-item gallery-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section02_content01.png"
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
                      기술과 예술의 경계에서 펼쳐지는 몰입형 경험을 탐색합니다.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item gallery-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section02_content02.png"
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item gallery-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section02_content03.png"
                    alt="content03"
                  />
                </figure>
                <div className="card-text">
                  <span className="card-title">
                    깨어진 경계: 인간과 디지털의 융합
                  </span>
                  <div className="card-disc">
                    <p>
                      인간의 형상에 디지털 파편이 스며들어, 존재의 새로운 의미를
                      탐구합니다.
                    </p>
                    <p>
                      현대 사회와 기술의 상호작용을 은유적으로 표현한
                      작품입니다.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item gallery-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section02_content04.png"
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
                    <p>시대를 초월한 예술적 가치를 현대적으로 재해석합니다.</p>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwiper display-mobile"
          slidesPerView={2}
          spaceBetween={10}
        >
          <SwiperSlide>
            <div className="card-item gallery-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section02_content01.png"
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
                      기술과 예술의 경계에서 펼쳐지는 몰입형 경험을 탐색합니다.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item gallery-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section02_content02.png"
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item gallery-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section02_content03.png"
                    alt="content03"
                  />
                </figure>
                <div className="card-text">
                  <span className="card-title">
                    깨어진 경계: 인간과 디지털의 융합
                  </span>
                  <div className="card-disc">
                    <p>
                      인간의 형상에 디지털 파편이 스며들어, 존재의 새로운 의미를
                      탐구합니다.
                    </p>
                    <p>
                      현대 사회와 기술의 상호작용을 은유적으로 표현한
                      작품입니다.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item gallery-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section02_content04.png"
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
                    <p>시대를 초월한 예술적 가치를 현대적으로 재해석합니다.</p>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="gallery-link-btn btn-section">
        <a href="/">
          <span>전체 보기</span>
        </a>
      </div>
    </section>
  );
};
export default Section02;
