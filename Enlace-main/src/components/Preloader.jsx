import image from "../assets/logo.png";
import { useRef, useEffect } from "react";
import anime from "animejs";

const Preloader = () => {
  const animationRef = useRef(null);
  const preloaderRef = useRef(null);

  window.addEventListener(
    "load",
    () => {
      setTimeout(() => {
        sessionStorage.setItem("doNotShowPreloader", "true");
        document.body.style.overflow = "initial";
        preloaderRef.current.classList.add("hidden");
      }, 3000);
    },
    { once: true }
  );

  useEffect(() => {
    if (sessionStorage.getItem("doNotShowPreloader") == null) {
      document.body.style.overflow = "hidden";
      preloaderRef.current.classList.remove("hidden");
    }
    animationRef.current = anime
      .timeline()
      .add({
        targets: ".image img",
        easing: "easeOutQuad",
        duration: 1000,
        loop: false,
        rotate: [0, 360],
        scale: [0, 1],
      })
      .add({
        targets: ".image h1",
        duration: 1000,
        loop: false,
        opacity: [0, 1],
      });
  }, []);

  return (
    <div
      ref={preloaderRef}
      onLoad={() => animationRef.current.restart()}
      className="hidden image bg-gradient-to-br from-[#FFFFE5] to-[#FFD6B3] absolute z-50 top-0 bottom-0 left-0 right-0 pt-[150px] font-reemkufi space-y-5 text-4xl bg-white"
    >
      <img
        src={image}
        className="mx-auto w-[200px] h-auto"
        alt="rotating enlace logo"
      ></img>
      <h1 className="text-center">ENLACE</h1>
    </div>
  );
};

export default Preloader;
