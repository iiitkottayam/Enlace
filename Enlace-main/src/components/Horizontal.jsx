import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useScrollDirection } from "react-use-scroll-direction";
import { useEffect, useRef } from "react";
import styles from "./horizontal.module.css";
import Arrow1 from "./Arrow1.jsx";
import Arrow2 from "./Arrow2.jsx";
import Box from "./Box.jsx";
import Goldbox from "./Goldbox.jsx";
import Silverbox from "./Silverbox.jsx";
import Emeraldbox from "./Emeraldbox.jsx";
import Sapphirebox from "./Sapphirebox.jsx";
import FAQbox from "./FAQbox.jsx";
import jeepGif from "../assets/jeep.gif";
import jeepPng from "../assets/jeep.png";

gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 0.4,
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });
  }, []);

  useEffect(() => {
    gsap.to("#jeep",{
      scrollTrigger: {
        trigger: "#jeep",
        start: "top center",
        end: "bottom -800px",
        scrub: 1,
      },
      x: document.body.clientWidth - 320,
      ease: "none",
    });
  }, []);

  const { isScrolling } = useScrollDirection();

  return (
    <>
      <div className={styles.HorizontalWrapper} ref={panelsContainer}>
        <img src = {jeepGif} alt = "jeep" className = {styles.jeep} id = "jeep"/>
        <div className={styles.page} ref={(e) => createPanelsRefs(e, 0)}> 
          <div className="mx-auto w-5/6 h-full flex flex-row flex-nowrap justify-around items-center">
            
            <div
              className="h-5/6 flex flex-col flex-nowrap justify-evenly items-center self-end"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <Arrow1 />
              <h2 className="font-reemkufi lg:text-5xl text-white">Day 2</h2>
            </div>
            <div className="h-5/6 flex flex-col flex-nowrap justify-around items-center">
              <div
                className="lg:w-96 lg:h-24 bg-gradient-to-r from-gradient-start to-gradient-stop rounded"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
              ></div>
              <Box />
              <Box />
              <Box />
            </div>
            <div
              className="h-5/6 w-2/6 flex flex-col flex-nowrap justify-evenly items-center"
              data-aos="flip-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="w-full text-left">
                <h1 className="font-reemkufi lg:text-7xl text-white my-3">
                  Day 1
                </h1>
                <h3 className="font-reemkufi lg:text-5xl text-white">
                  25th March
                </h3>
              </div>
              <p className="w-full font-poppins lg:text-2xl text-white text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis ea tempore inventore. Cum dolor earum repellendus sequi
                est, temporibus inventore.
              </p>
              <div className="w-full flex flex-row justify-around items-center">
                <div className="lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-gradient-start to-gradient-stop"></div>
                <p className="lg:text-2xl text-white font-semibold">
                  Highlight: Dance by Bond...James
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.page} ref={(e) => createPanelsRefs(e, 1)}>
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="font-reemkufi lg:text-7xl text-white">
              Total Prize of <br /> ₹ 55,000
            </h1>
          </div>
        </div>
        <div className={styles.page} ref={(e) => createPanelsRefs(e, 2)}>
          <div className="h-full w-full flex flex-row flex-nowrap justify-around items-center">
            <div className="flex flex-col flex-nowrap justify-center items-center">
              <h1 className="font-reemkufi lg:text-7xl text-white">
                Our Sponsors
              </h1>
              <Arrow2 />
            </div>
            <div className="flex flex-col flex-nowrap justify-around items-center">
              <h1 className="font-poppins font-semibold lg:text-6xl text-white mb-10">
                Gold Tier
              </h1>
              <Goldbox />
            </div>
          </div>
        </div>
        <div className={styles.page} ref={(e) => createPanelsRefs(e, 3)}>
          <div className="h-full w-full flex flex-row flex-nowrap justify-around items-center">
            <div className="w-2/5 h-full flex flex-col flex-nowrap justify-around items-center">
              <div className="w-full h-2/5 flex flex-col flex-nowrap justify-around items-center">
                <h1 className="font-poppins font-semibold lg:text-6xl text-white text-center">
                  Silver Tier
                </h1>
                <div className="w-full flex flex-row flex-wrap justify-between items-center">
                  <Silverbox />
                  <Silverbox />
                  <Silverbox />
                </div>
              </div>
              <div className="w-4/5 h-2/5 flex flex-col flex-nowrap justify-evenly items-center">
                <h1 className="font-poppins font-semibold lg:text-4xl text-white text-center">
                  Emerald Tier
                </h1>
                <div className="w-full flex flex-row flex-wrap justify-around items-center">
                  <Emeraldbox />
                  <Emeraldbox />
                  <Emeraldbox />
                </div>
              </div>
            </div>
            <div className="h-5/6 flex flex-col flex-nowrap justify-around items-center">
              <h1 className="font-poppins font-semibold lg:text-5xl text-white text-center">
                Sapphire Tier
              </h1>
              <div className="h-4/5 flex flex-col flex-nowrap justify-around items-center">
                <Sapphirebox />
                <Sapphirebox />
                <Sapphirebox />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.page} ref={(e) => createPanelsRefs(e, 4)}>
          <div className="mx-auto h-full w-5/6 flex flex-col flex-wrap justify-evenly items-center">
            <FAQbox question="Why?" answer="Why not?" />
            <FAQbox question="Where?" answer="Here" />
            <FAQbox />
            <FAQbox />
            <FAQbox />
            <FAQbox />
          </div>
        </div>
        <div className={styles.page} ref={(e) => createPanelsRefs(e, 5)}>
          <div className="h-full w-full flex flex-col flex-nowrap justify-center items-center">
            <h1 className="font-reemkufi lg:text-7xl text-white mb-20">
              Register Now!
            </h1>
            <button className="font-poppins font-semibold lg:text-4xl text-black p-5 bg-gradient-to-r from-gradient-start/80 to-gradient-stop/80 rounded-lg box-border border-2">
              Learn More!
            </button>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Horizontal;
