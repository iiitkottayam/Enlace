import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./horizontal.module.css";
import Arrow2 from "../Arrows/Arrow2.jsx";
import Goldbox from "../Boxes/Goldbox.jsx";
import Silverbox from "../Boxes/Silverbox.jsx";
import Emeraldbox from "../Boxes/Emeraldbox.jsx";
import Sapphirebox from "../Boxes/Sapphirebox.jsx";
import FAQbox from "../Boxes/FAQbox.jsx";
import Timeline from "../Timeline/Timeline.jsx";
import CommonButton from "../CommonButton.jsx";
import OrangeBox from "../Boxes/OrangeBox.jsx";

const urls = ["https://res.cloudinary.com/roshin/image/upload/v1647279802/Assets_Enlace/jeep_ptmw97.gif"];

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
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1.5,
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
      ease: 'none', xPercent: -100 * (totalPanels - 1), rotation: 0.01
    })

    gsap.to(".jeep", {
      scrollTrigger: {
        trigger: ".jeep",
        start: "bottom 90%",
        end: "bottom -1000px",
        scrub: 1,
      },
      ease: 'none', x: 7800, rotation: 0.01
    }, [])
    
    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      // This in case a scroll animation is active while the route is updated
      gsap.killTweensOf(window);
    };
  }, []);

  return (
    <>
      <div
        className={styles.HorizontalWrapper + " PanelsContainer"}
        ref={panelsContainer}
      >
        <img
          src={urls[0]}
          alt="jeep"
          className="jeep"
          style={{
            position: "absolute",
            zIndex: 0,
            width: "20rem",
            height: "10rem",
            top: "68vh",
            left: "1rem",
          }}
        />
        <div
          className={styles.page + " page"}
          ref={(e) => createPanelsRefs(e, 0)}
        >
          <div className="mx-auto w-5/6 h-full flex flex-row flex-nowrap justify-around items-center">
            <Timeline />
          </div>
        </div>
        <div className={styles.page} ref={(e) => createPanelsRefs(e, 1)}>
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="font-reemkufi lg:text-7xl text-white">
              Total Prize of <br /> ₹ 52,000
            </h1>
          </div>
        </div>
        <div
          className={styles.page}
          ref={(e) => createPanelsRefs(e, 2)}
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
              <h1 className="font-poppins font-semibold lg:text-4xl xl:text-5xl text-white mb-10">
                Gold Tier
              </h1>
              <Goldbox />
            </div>
          </div>
        </div>
        <div className={styles.page} ref={(e) => createPanelsRefs(e, 3)}>
          <div className="h-full w-full flex flex-row flex-nowrap justify-around items-center">
            <div className="w-2/5 h-full flex flex-col flex-nowrap justify-around items-center">
              <div className="w-full h-2/5 flex flex-col flex-nowrap justify-evenly items-center">
                <h1 className="font-poppins font-semibold lg:text-4xl xl:text-5xl text-white text-center">
                  Silver Tier
                </h1>
                <div className="w-full flex flex-row flex-wrap justify-around items-center">
                  <Silverbox />
                  <Silverbox />
                  <Silverbox />
                </div>
              </div>
              <div className="w-4/5 h-2/5 flex flex-col flex-nowrap justify-evenly items-center">
                <h1 className="font-poppins font-semibold lg:text-4xl xl:text-5xl text-white text-center">
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
              <h1 className="font-poppins font-semibold lg:text-4xl xl:text-5xl text-white text-center">
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
          ref={(e) => createPanelsRefs(e, 4)}
          id="faq"
        >
          <div className = "flex items-center justify-evenly h-full">
            <div className="mx-auto h-3/5 w-4/6 flex grid grid-cols-2 justify-center items-center gap-y-10">
              <FAQbox question = "Where will the events be conducted?" answer = "The events will be conducted in a fully virtual mode using video and audio conferencing technologies." />
              <FAQbox question = "Will I get any certificates for event participation?" answer = "Yes/No" />
              <FAQbox />
              <FAQbox question = "Is it virtual?" answer = "Yes completely online"/>
            </div>
          </div>
        </div>
        <div
          className={styles.page}
          ref={(e) => createPanelsRefs(e, 5)}
          id="register"
        >
          <div className="relative h-full w-full flex flex-col flex-nowrap justify-center">
            <div className="mx-auto pb-14">
              <CommonButton />
            </div>
            <div className="flex gap-10 w-8/12 mx-auto pt-14">
              <OrangeBox buttonContent={"Ask Us"} text={"Have any query ?"} link={"https://docs.google.com/forms/d/e/1FAIpQLScH6prke7fPTi7ysQPfsarxe6iK2FbJg-6ZKR3-zNf912bVMw/viewform"} />
              <OrangeBox buttonContent={"Sponsor Us"} text={"Want to become a sponsor"} link={"https://forms.gle/ZBB5ZvZytwxsmc1EA"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Horizontal;
