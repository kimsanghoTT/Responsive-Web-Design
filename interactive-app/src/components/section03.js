import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section03 = () => {
  useEffect(() => {
    const text = gsap.timeline({
      scrollTrigger: {
        trigger: ".section03",
        start: "top 60%",
      },
    });
    text
      .fromTo(
        ".section03 .section-title h2",
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.inOut",
        }
      )
      .fromTo(
        ".section03 .section-title span",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.inOut",
        }
      )
      .fromTo(
        ".interview-link-btn",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power1.inOut",
        }
      );
    gsap.fromTo(
      ".interview-content p",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".section03",
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section className="section-interview section03">
      <div className="section-title interview-title">
        <h2>아티스트 인사이트</h2>
        <span>
          디지털 아트의 현재와 미래를 이끄는 아티스트들의 생생한 목소리
        </span>
      </div>
      <div className="interview-content">
        <p>여기, 상상력이 현실이 되고 코드가 예술이 되는 현장이 있습니다.</p>
        <p>
          그들이 작품을 통해 던지는 질문들, 창작 과정의 숨겨진 이야기,
          <br />
          그리고 기술과 예술에 대한 깊이 있는 통찰을 통해
          <br />
          여러분은 미처 알지 못했던 예술의 새로운 지평을 경험하게 될 것입니다.
        </p>
        <p>
          아티스트들의 시선과 철학이 담긴 인터뷰를 통해
          <br />
          작품 너머에 존재하는 영감과 열정을 발견하고 다가올 예술의 미래를 함께
          그려보세요.
          <br />각 인터뷰는 단순한 정보 전달을 넘어, 여러분에게 깊은 영감과
          사색의 시간을 선사할 것입니다.
        </p>
      </div>
      <div className="interview-link-btn btn-section">
        <a href="/">
          <span>전체 보기</span>
        </a>
      </div>
      <figure className="interview-img">
        <div className="section03-img01"></div>
        <div className="section03-img02"></div>
      </figure>
      <div className="interview-section-sub-bg"></div>
    </section>
  );
};
export default Section03;
