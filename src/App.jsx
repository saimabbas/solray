import React, { useEffect } from "react";
import Logo from "./assets/logo.png";
import Icon1 from "./assets/icon-1.png";
import Icon2 from "./assets/icon-2.png";
import Icon3 from "./assets/icon-3.png";
import Icon4 from "./assets/icon-4.png";
import Icon5 from "./assets/icon-5.png";
import Nft from "./assets/nft.jpg";
import Brandmark from "./assets/brandmark.png";
import "./App.css";
import $ from "jquery";
import { FaDatabase } from "react-icons/fa";
import {
  MdMenu,
  MdClose,
  MdPrivacyTip,
  MdQueryBuilder,
  MdImportantDevices,
  MdLanguage,
  MdLock,
  MdSwapHoriz,
  MdShoppingCart,
  MdEditCalendar,
  MdExpandMore,
  MdFacebook,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

import { Power4 } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ParticleBackground from "./ParticleBackground";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

const App = () => {
  SwiperCore.use([Navigation, Pagination]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    $(".mob-header-open").click(() => {
      $(".mob-header").css({
        display: "flex",
      });
      $(".mob-header-open").css({
        display: "none",
      });
      $(".mob-header-close").css({
        display: "flex",
      });
    });
    $(".mob-header-close").click(() => {
      $(".mob-header").css({
        display: "none",
      });
      $(".mob-header-open").css({
        display: "flex",
      });
      $(".mob-header-close").css({
        display: "none",
      });
    });
  }, []);

  /* Desktop Anchoring Funtions */

  const moveTo1 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        // offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo2 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo3 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo4 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo5 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo6 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section6",
      },
      ease: Power4.easeInOut,
    });
  };

  // Mobile Anchoring Functions

  const moveTo1Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        // offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo2Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo3Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 60,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo4Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 60,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo5Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 60,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };
  const moveTo6Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section6",
        offsetY: 0,
      },
      ease: Power4.easeInOut,
    });
    $(".mob-header").css({
      display: "none",
    });
    $(".mob-header-open").css({
      display: "flex",
    });
    $(".mob-header-close").css({
      display: "none",
    });
  };

  /* Custom FAQ accordians */
  const q1 = () => {
    $(".a1").slideToggle(350);
    $(".q1 svg").toggleClass("rotate");
  };
  const q2 = () => {
    $(".a2").slideToggle(350);
    $(".q2 svg").toggleClass("rotate");
  };
  const q3 = () => {
    $(".a3").slideToggle(350);
    $(".q3 svg").toggleClass("rotate");
  };
  const q4 = () => {
    $(".a4").slideToggle(350);
    $(".q4 svg").toggleClass("rotate");
  };
  const q5 = () => {
    $(".a5").slideToggle(350);
    $(".q5 svg").toggleClass("rotate");
  };
  const q6 = () => {
    $(".a6").slideToggle(350);
    $(".q6 svg").toggleClass("rotate");
  };
  const q7 = () => {
    $(".a7").slideToggle(350);
    $(".q7 svg").toggleClass("rotate");
  };
  const q8 = () => {
    $(".a8").slideToggle(350);
    $(".q8 svg").toggleClass("rotate");
  };

  return (
    <div className="isaacweb">
      {/* Header */}
      <div className="header">
        <div className="mob-header">
          <a onClick={moveTo1Mob}>HOME</a>
          <a onClick={moveTo2Mob}>PLATFORM</a>
          <a onClick={moveTo3Mob}>ICO</a>
          <a onClick={moveTo4Mob}>ABOUT</a>
          <a onClick={moveTo5Mob}>ROAD MAP</a>
          <a onClick={moveTo6Mob}>FAQ</a>
        </div>
        <div className="box">
          <div className="header-content">
            <img className="header-left" src={Brandmark} alt="img" />
            <div className="header-right-mob">
              <MdMenu className="mob-header-open" />
              <MdClose className="mob-header-close" />
            </div>
            <div className="header-right">
              <a onClick={moveTo1}>HOME</a>
              <a onClick={moveTo2}>PLATFORM</a>
              <a onClick={moveTo3}>ICO</a>
              <a onClick={moveTo4}>ABOUT</a>
              <a onClick={moveTo5}>ROAD MAP</a>
              <a onClick={moveTo6}>FAQ</a>
            </div>
          </div>
        </div>
      </div>
      {/* Header-Hero Section */}
      <div className="hero-section-parent-container">
        <ParticleBackground className="particles-box" />
        {/* Hero Section */}
        <div className="hero" id="section1">
          <div className="box">
            <div className="hero-content">
              <h1>Build a new kind of Decentralized</h1>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
              <div className="hero-button">
                <button className="ylw-btn">VIEW WHITE PAPER</button>
                <button className="grey-btn">JOIN US</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exchange Platform Section */}
      <div className="exchangeplatform section" id="section2">
        <div className="box">
          <div className="exchangeplatform-content">
            <h6 className="section-heading grd-text">
              Crypto Currency Exchange Platform
            </h6>
            <p>You can sell or trade on all crypto currency.</p>
            <div className="exchangeplatform-grid">
              <div className="epg-content epg-content-grid">
                <div className="icon-epg">
                  <img src={Icon1} alt="Icon" />
                </div>
                <h6 className="grd-text">Research</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  labore adipisci facilis, nobis laudantium ab est deleniti.
                </p>
              </div>
              <div className="epg-content epg-content-grid">
                <div className="icon-epg">
                  <img src={Icon3} alt="Icon" />
                </div>
                <h6 className="grd-text">Development</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  labore adipisci facilis, nobis laudantium ab est deleniti.
                </p>
              </div>
              <div className="epg-content epg-content-grid">
                <div className="icon-epg">
                  <img src={Icon2} alt="Icon" />
                </div>
                <h6 className="grd-text">Deployment</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  labore adipisci facilis, nobis laudantium ab est deleniti.
                </p>
              </div>
              <div className="epg-content epg-content-grid">
                <div className="icon-epg">
                  <img src={Icon5} alt="Icon" />
                </div>
                <h6 className="grd-text">Strategy & Roadmap</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  labore adipisci facilis, nobis laudantium ab est deleniti.
                </p>
              </div>
              <div className="epg-content epg-content-grid">
                <div className="icon-epg">
                  <img src={Icon4} alt="Icon" />
                </div>
                <h6 className="grd-text">Marketing</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  labore adipisci facilis, nobis laudantium ab est deleniti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pre Icon Detail Section */}
      <div className="pre-icon-detail-sections">
        {/* Pre-Sale Info Section */}
        <div className="presale section" id="section3">
          <div className="box">
            <div className="presale-content">
              <h6 className="section-heading grd-text">ICO Pre-sale & Info</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a
                voluptatibus tempore ducimus nemo optio nam ratione, quia omnis
                laudantium quam ipsam nisi neque illum?
              </p>
              <div className="presale-boxes">
                <div className="presale-left">
                  <h6>ICO ENDS IN</h6>
                  <p id="demo"></p>
                  <div className="pl-progress-bar">
                    <h6>OETH</h6>
                    <div className="pl-progress-outer">
                      <div className="pl-progress-inner">
                        <p>70K</p>
                      </div>
                    </div>
                    <h5>$706324.00</h5>
                    <h4>Already Invested!</h4>
                  </div>
                  <button className="purp-btn">Invest Now</button>
                  <h1>~ We accept: USD, BTC, ETH, LTD</h1>
                </div>
                <div className="presale-right">
                  <div className="presale-right-content">
                    <h6 className="grd-text">
                      ICO Tokenz has distributed May BTC
                    </h6>
                    <h5>25 May 2018</h5>
                    <p>
                      Lorem ipsum dolor sit elit. Accusamus cum natus quibusdam,
                      commodi delectus atque porro odio impedit. Inventore
                      nesciunt totam vitae asperiores nulla perspiciatis?
                    </p>
                  </div>
                  <div className="presale-right-content">
                    <h6 className="grd-text">
                      ETH Competetion - 7 Million Giveaway
                    </h6>
                    <h5>24 May 2018</h5>
                    <p>
                      Lorem ipsum dolor sit elit. Accusamus cum natus quibusdam,
                      commodi delectus atque porro odio impedit. Inventore
                      nesciunt totam vitae asperiores nulla perspiciatis?
                    </p>
                  </div>
                  <div className="presale-right-content">
                    <h6 className="grd-text">ICO Tokenz Listed Ripple</h6>
                    <h5>23 May 2018</h5>
                    <p>
                      Lorem ipsum dolor sit elit. Accusamus cum natus quibusdam,
                      commodi delectus atque porro odio impedit. Inventore
                      nesciunt totam vitae asperiores nulla perspiciatis?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Road Map Section */}
      <div className="roadmap section" id="section5">
        <div className="box">
          <div className="roadmap-content">
            <h6 className="section-heading grd-text">Road Map</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a
              voluptatibus tempore ducimus nemo optio nam ratione, quia omnis
              laudantium quam ipsam nisi neque illum?
            </p>

            <div className="roadmap-swiper-container">
              <span className="roadmap-prev">
                <MdKeyboardArrowLeft />
              </span>
              <Swiper
                breakpoints={{
                  700: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 3,
                  },
                  1250: {
                    slidesPerView: 5,
                  },
                }}
                loop="true"
                centeredSlides={true}
                slidesPerView="1"
                navigation={{
                  nextEl: ".roadmap-next",
                  prevEl: ".roadmap-prev",
                }}
                grabCursor={false}
                speed={400}
              >
                <SwiperSlide>
                  <div className="roadmap-swiperslide">
                    <h1 className="grd-text">Q4 2020</h1>
                    <div className="roadmap-line">
                      <span>1</span>
                      <div></div>
                    </div>
                    <p>Project Planning and Research</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="roadmap-swiperslide">
                    <h1 className="grd-text">Q4 2020</h1>
                    <div className="roadmap-line">
                      <span>1</span>
                      <div></div>
                    </div>
                    <p>Project Planning and Research</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="roadmap-swiperslide">
                    <h1 className="grd-text">Q4 2020</h1>
                    <div className="roadmap-line">
                      <span>1</span>
                      <div></div>
                    </div>
                    <p>Project Planning and Research</p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <span className="roadmap-next">
                <MdKeyboardArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pre Icon Detail Section */}
      <div className="pre-icon-detail-sections">
        {/* Pre-Sale Info Section */}
        <div className="presale section" id="section3">
          <div className="box">
            <div className="presale-content">
              <h6 className="section-heading grd-text">ICO Pre-sale & Info</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a
                voluptatibus tempore ducimus nemo optio nam ratione, quia omnis
                laudantium quam ipsam nisi neque illum?
              </p>
              <div className="presale-boxes-inverted">
                <div className="presale-right">
                  <div className="presale-right-content">
                    <h6 className="grd-text">
                      ICO Tokenz has distributed May BTC
                    </h6>
                    <h5>25 May 2018</h5>
                    <p>
                      Lorem ipsum dolor sit elit. Accusamus cum natus quibusdam,
                      commodi delectus atque porro odio impedit. Inventore
                      nesciunt totam vitae asperiores nulla perspiciatis?
                    </p>
                  </div>
                  <div className="presale-right-content">
                    <h6 className="grd-text">
                      ETH Competetion - 7 Million Giveaway
                    </h6>
                    <h5>24 May 2018</h5>
                    <p>
                      Lorem ipsum dolor sit elit. Accusamus cum natus quibusdam,
                      commodi delectus atque porro odio impedit. Inventore
                      nesciunt totam vitae asperiores nulla perspiciatis?
                    </p>
                  </div>
                  <div className="presale-right-content">
                    <h6 className="grd-text">ICO Tokenz Listed Ripple</h6>
                    <h5>23 May 2018</h5>
                    <p>
                      Lorem ipsum dolor sit elit. Accusamus cum natus quibusdam,
                      commodi delectus atque porro odio impedit. Inventore
                      nesciunt totam vitae asperiores nulla perspiciatis?
                    </p>
                  </div>
                </div>
                <img src={Nft} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ's Section */}
      <div className="faq section" id="section6">
        <div className="box">
          <div className="faq-content">
            <h6 className="section-heading grd-text">
              Frequently Asked Questions
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a
              voluptatibus tempore ducimus nemo optio nam ratione, quia omnis
              laudantium quam ipsam nisi neque illum?
            </p>
            <div className="faq-q-a">
              <div className="faq-box" onClick={q1}>
                <div className="faq-q q q1">
                  <h6>What is ICO?</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a1 a">
                  <h6>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas nibh dolor, efficitur eget pharetra ac, cursus sed
                    sapien. Cras posuere ligula ut blandit varius.
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q2}>
                <div className="faq-q q q2">
                  <h6>Our Mission</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a a2">
                  <h6>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q3}>
                <div className="faq-q q q3">
                  <h6>Why The Best ICO BlockChain</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a3 a">
                  <h6>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q4}>
                <div className="faq-q q q4">
                  <h6>Our Services</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a4 a">
                  <h6>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q5}>
                <div className="faq-q q q5">
                  <h6>What is ICO Blockchain?</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a5 a">
                  <h6>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q6}>
                <div className="faq-q q q6">
                  <h6>Blockchain Intro</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a6 a">
                  <h6>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q7}>
                <div className="faq-q q q7">
                  <h6>Best Crypto in this World</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a7 a">
                  <h6>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                  </h6>
                </div>
              </div>
              <div className="faq-box" onClick={q8}>
                <div className="faq-q q q8">
                  <h6>Crypto Currency FAQs</h6>
                  <MdExpandMore />
                </div>
                <div className="faq-a a8 a">
                  <h6>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="box">
          <div className="footer-content">
            <div className="footer-left">
              <img src={Brandmark} alt="img" />
            </div>
            <div className="footer-right">
              <div className="footer-icon">
                <MdFacebook />
              </div>
              <div className="footer-icon">
                <MdFacebook />
              </div>
              <div className="footer-icon">
                <MdFacebook />
              </div>
              <div className="footer-icon">
                <MdFacebook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
