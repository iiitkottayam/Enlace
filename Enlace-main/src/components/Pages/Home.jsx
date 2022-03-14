import Horizontal from "../Horizontal/Horizontal";
import Vertical from "../Vertical/Vertical";
import frame from "../../assets/Frame.png";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";

const Home = () => {
  useEffect(() => {
    gsap.to(".bg", {
      xPercent: -100,
      x: () => window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".bg",
        scrub: 1,
        pin: true,
        end: () => "+=" + window.innerWidth,
      },
    });
  });

  return (
    <div>
      <Vertical />
      <div className="hidden lg:block" style={{ overflow: "hidden" }}>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${frame})`,
            height: "100vh",
            width: "500vw",
            backgroundSize: "cover",
          }}
        >
          <Horizontal />
        </div>
      </div>
    </div>
  );
};

export default Home;
