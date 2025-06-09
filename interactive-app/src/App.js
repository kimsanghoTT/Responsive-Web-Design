import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Section01 from "./components/section01";
import Section02 from "./components/section02";
import Section03 from "./components/section03";
import Section04 from "./components/section04";
import Footer from "./components/footer";
import "./mobile/section_m.css";
import "./mobile/header_m.css"

function App() {
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);
  return (
    <>
      <Header />
      <div id="wrapper">
        <Section01 />
        <div className="inner-box">
          <Section02 />
          <Section03 />
          <Section04 />
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
