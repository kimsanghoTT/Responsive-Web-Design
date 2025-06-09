import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
gsap.registerPlugin(ScrollTrigger);

const Section04 = () => {
  useEffect(() => {
    const text = gsap.timeline({
      scrollTrigger: {
        trigger: ".section04",
        start: "top 60%",
      },
    });
    text
      .fromTo(
        ".section04 .section-title h2",
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.inOut",
        }
      )
      .fromTo(
        ".section04 .section-title span",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.inOut",
        }
      )
      .fromTo(
        ".news-link-btn",
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power1.inOut",
        }
      );
    gsap.fromTo(
      ".news-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".section04",
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section className="section-news section04">
      <div className="section-title">
        <h2>디지털 아트 리포트</h2>
        <span>디지털 세계 속 예술과 기술의 교차점을 포착한 뉴스 아카이브</span>
      </div>
      <div className="card-section">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          className="mySwiper"
          slidesPerView={2}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div className="card-item news-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section04_content01.png"
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item news-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section04_content02.png"
                    alt="content02"
                  />
                </figure>
                <div className="card-text">
                  <span className="card-title">
                    미지의 디지털 아트 전시, 관람객을 초현실적 공간으로 초대하다
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item news-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section04_content03.png"
                    alt="content03"
                  />
                </figure>
                <div className="card-text">
                  <span className="card-title">
                    '빛의 마술사' 제임스 터렐, 서울을 빛으로 물들이다…
                  </span>
                  <div className="card-disc">
                    <p>
                      세계적인 '빛의 예술가' 제임스 터렐의 몰입형 작품이 서울에
                      전시되어 강렬한 보랏빛으로 공간을 채우며 관람객에게
                      초현실적인 경험을 선사하고 있다.
                    </p>
                    <p>
                      빛을 통해 감각과 인식을 확장시켜 현대인들에게 새로운
                      예술적 휴식과 사색의 시간을 제공한다.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item news-item">
              <a href="/">
                <figure className="card-img">
                  <img
                    src="../../img/web/section04_content04.png"
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
                      어우러져 관람객들에게 시각적으로 압도적인 경험을 선사하고
                      있다.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="news-link-btn btn-section">
        <a href="/">
          <span>전체 보기</span>
        </a>
      </div>
    </section>
  );
};
export default Section04;
