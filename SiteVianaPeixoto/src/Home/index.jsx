import Footer from "../shared/Footer";
import Header from "../shared/Header";
import MiniHeader from "../shared/MiniHeader";
import MainBanner from "./MainBannerHome";
import Topics from "./Topics";
import SecondBanner from "./SecondBanner";
import React, { useRef } from "react";
import CookieConsent from "./Cookies";

const Home = () => {
  
  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };
    return (
      <>
        <div ref={topRef}></div>
        <CookieConsent/>
        <MiniHeader />
        <Header />
        <MainBanner />
        <Topics scrollToTop={scrollToTop} />
        <Footer />
      </>
    );
  };
  
  export default Home;