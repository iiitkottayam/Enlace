import Horizontal from "../Horizontal/Horizontal";
import Vertical from "../Vertical/Vertical";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Helmet } from "react-helmet";

const urls = ["https://res.cloudinary.com/roshin/image/upload/v1647279801/Assets_Enlace/Frame_eadgpz.png"];

const Home = () => {
  useEffect(() => {
    
    let t = gsap.timeline({
      scrollTrigger: {
        trigger: ".bg",
        scrub: 1,
        pin: true,
        end: () => "+=" + window.innerWidth,
      }
    });

    t
    .to('body',{ duration: 20 }) 
    .to('.bg',{duration: 2000, ease: 'none', xPercent: -100, rotation: 0.01, x: () => window.innerWidth})
    
    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      // This in case a scroll animation is active while the route is updated
      gsap.killTweensOf(window);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Enlace</title>
      </Helmet>
      <Vertical />
      <div className="hidden lg:block" style={{ overflow: "hidden" }}>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${urls[0]})`,
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
