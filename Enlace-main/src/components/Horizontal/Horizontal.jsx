import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useScrollDirection } from "react-use-scroll-direction";
import { useEffect, useRef } from "react";
import styles from "./horizontal.module.css";
import Arrow2 from "../Arrows/Arrow2.jsx";
import Goldbox from "../Boxes/Goldbox.jsx";
import Silverbox from "../Boxes/Silverbox.jsx";
import Emeraldbox from "../Boxes/Emeraldbox.jsx";
import Sapphirebox from "../Boxes/Sapphirebox.jsx";
import FAQbox from "../Boxes/FAQbox.jsx";
import jeepGif from "../../assets/jeep.gif";
import Timeline from "../Timeline/Timeline.jsx";

gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
  // const panels = useRef([]);
  // const panelsContainer = useRef();

  // const createPanelsRefs = (panel, index) => {
  //   panels.current[index] = panel;
  // };

  // useEffect(() => {
  //   const totalPanels = panels.current.length;

  //   gsap.to(panels.current, {
  //     xPercent: -100 * (totalPanels - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: panelsContainer.current,
  //       pin: true,
  //       scrub: 1,
  //       end: () => "+=" + panelsContainer.current.offsetWidth,
  //     },
  //   });
  // }, []);

  useEffect(() => {
    gsap.to("#jeep", {
      scrollTrigger: {
        trigger: "#jeep",
        start: "top center",
        markers: true,
        scrub: 5,
      },
      x: document.getElementById("horizontal").clientWidth + 24800,
      ease: "none",
    });
    console.log(document.getElementById("horizontal").clientWidth);
  }, []);

  // const { isScrolling } = useScrollDirection();

  return (
    <div className = {styles.OuterWrapper}>
      <div className = {styles.HorizontalWrapper} id = "horizontal">
        <img src = {jeepGif} alt = "jeep" className = {styles.jeep} id = "jeep" />
        <div className={styles.page}>
          <div className="mx-auto w-5/6 h-full flex flex-row flex-nowrap justify-around items-center">
            <Timeline />
          </div>
        </div>
        <div className={styles.page}>
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="font-reemkufi lg:text-7xl text-white">
              Total Prize of <br /> ₹ 55,000
            </h1>
          </div>
        </div>
        <div
          className={styles.page}
          id="sponsors"
        >
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
        <div className={styles.page}>
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
        <div
          className={styles.page}
          id="faq"
        >
          <div className="mx-auto h-full w-4/6 flex flex-col flex-wrap justify-evenly items-center">
            <FAQbox question="Why?" answer="Why not?" />
            <FAQbox question="Where?" answer="Here" />
            <FAQbox />
            <FAQbox />
            <FAQbox />
            <FAQbox />
          </div>
        </div>
        <div
          className={styles.page}
          id="register"
        >
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
    </div>
  );
};

export default Horizontal;
