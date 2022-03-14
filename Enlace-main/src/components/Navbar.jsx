import logo from "../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import Navbarlink from "./Navbarlinks/Navbarlink";
import Navbarlinkmob from "./Navbarlinks/Navbarlinkmob";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useHistory } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Navbar = () => {

  const history = useHistory();

  const scroller = (e) => {
    const panelsContainer = document.querySelector(".PanelsContainer");
    const page = document.querySelector(".page");
    const vertical = document.querySelector(".vertical");
    let targetElem = document.querySelector(e),
      y = targetElem;
    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      var totalScroll = page.offsetWidth,
        totalMovement = 5 * targetElem.offsetWidth;
      y = Math.round(
        vertical.offsetHeight +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false,
      },
      duration: 1,
    });
  };

  useEffect(() => {
    document.querySelectorAll("#anchor").forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        if (window.location.pathname !== "/") {
          history.push("/");
          sessionStorage.setItem("load", true);
          sessionStorage.setItem("loc", e.target.getAttribute("href"));
        } else {
          scroller(e.target.getAttribute("href"));
        }
      });
    });

    if (sessionStorage.getItem("load")) {
      scroller(sessionStorage.getItem("loc"));
      sessionStorage.setItem("load", false);
      sessionStorage.removeItem("loc");
    }
  });

  const navRef = useRef(null);
  const iconRef = useRef(null);
  const menuRef = useRef(null);

  const toggleNav = () => {
    const nav = navRef.current;
    const icon = iconRef.current;
    const menu = menuRef.current;
    if (icon.classList.contains("fa-bars")) {
      document.body.style.overflow = "hidden";
      nav.classList.remove(
        "absolute",
        "top-3",
        "rounded-full",
        "border-2",
        "w-11/12",
        "items-center"
      );
      nav.classList.add(
        "fixed",
        "top-0",
        "h-[100vh]",
        "items-start",
        "pt-6",
        "px-9"
      );
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      menu.classList.remove("hidden");
      menu.classList.add("flex");
    } else {
      document.body.style.overflow = "initial";
      nav.classList.add(
        "absolute",
        "top-3",
        "rounded-full",
        "border-2",
        "w-11/12",
        "items-center"
      );
      nav.classList.remove(
        "fixed",
        "top-0",
        "h-[100vh]",
        "items-start",
        "pt-6",
        "px-9"
      );
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    }
  };

  return (
    <nav
      ref={navRef}
      className="flex box-border container absolute top-3 left-0 right-0 justify-between px-5 md:px-7 py-2 w-11/12 md:w-auto mx-auto border-solid border-2 border-[#A9FF40] border-border-nav[0.69] bg-bg-nav/[0.6] backdrop-blur-md rounded-full items-center"
    >
      <div className="relative z-10">
        <Link
          to="/"
          onClick={() => {
            document.body.style.overflow = "initial";
          }}
        >
          <div className="flex items-center">
            <img
              className="h-8 w-12 md:h-10 md:w-14 pr-2"
              src={logo}
              alt="logo"
            />
            <h3 className="text-xl md:text-2xl xl:text-3xl text-white font-reemkufi">
              ENLACE
            </h3>
          </div>
        </Link>
      </div>
      <div className="hidden text-[#ffffffd6] font-medium text-xl md:text-sm lg:text-base md:space-x-8 lg:space-x-16 font-poppins md:flex items-center">
        <Navbarlink title="Competitions" route="/competitions" />
        <Navbarlink title="Events" route="/events" />
        <div>
          <Navbarlink title="About us" route="/" />
          <div className="peer text-[#00000000] select-none cursor-pointer absolute py-5 -mt-10">
            About us
          </div>
          <nav className="transition-transform duration-300 origin-top scale-y-0 peer-hover:scale-y-100 hover:scale-y-100 md:flex flex-col text-center box-border container w-40 h-36 absolute top-16 justify-between px-0 py-4 -mx-9 items-center border-solid border-2 border-[#A9FF40] border-border-nav[0.69] bg-bg-nav/[0.6] backdrop-blur-md rounded-2xl ">
            <a
              href="#whoweare"
              className="register relative hover:after:scale-x-100 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform"
              id="anchor"
            >
              Who We Are
            </a>
            <a
              href="#register"
              className="register relative hover:after:scale-x-100 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform"
              id="anchor"
            >
              Contact Us
            </a>
            <Navbarlink title="Teams" route="/teams" />
          </nav>
        </div>
        <a
          href="#sponsors"
          className="sponsors relative hover:after:scale-x-100 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform"
          id="anchor"
        >
          Sponsors
        </a>
        <a
          href="#faq"
          className="faq relative hover:after:scale-x-100 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform"
          id="anchor"
        >
          FAQ
        </a>
        <a
          href="#register"
          className="register text-[#A9FF40d6] relative hover:after:scale-x-100 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform"
          id="anchor"
        >
          Register
        </a>
      </div>
      <div className="relative z-10 flex items-center md:hidden">
        <i
          ref={iconRef}
          onClick={toggleNav}
          className="cursor-pointer fa-solid fa-bars text-white text-3xl"
        ></i>
      </div>
      <div
        ref={menuRef}
        className="z-0 md:hidden absolute top-0 bottom-0 left-0 right-0 hidden flex-col items-center justify-center space-y-8 text-[#ffffffd6] font-medium text-base text-xl sm:text-2xl font-poppins"
      >
        <Navbarlinkmob
          title="Competitions"
          route="/competitions"
          navRef={navRef}
          iconRef={iconRef}
          menuRef={menuRef}
        />
        <Navbarlinkmob
          title="Events"
          route="/events"
          navRef={navRef}
          iconRef={iconRef}
          menuRef={menuRef}
        />
        <Navbarlinkmob
          title="Who We Are"
          route="/#mobilewhoweare"
          navRef={navRef}
          iconRef={iconRef}
          menuRef={menuRef}
        />
        <Navbarlinkmob
          title="Contact Us"
          route="/#mobilecontactus"
          navRef={navRef}
          iconRef={iconRef}
          menuRef={menuRef}
        />
        <Navbarlinkmob
          title="Teams"
          route="/teams"
          navRef={navRef}
          iconRef={iconRef}
          menuRef={menuRef}
        />
        <Navbarlinkmob
          title="Sponsors"
          route="/#mobilesponsors"
          navRef={navRef}
          iconRef={iconRef}
          menuRef={menuRef}
        />
        <Navbarlinkmob
          title="FAQ"
          route="/#mobilefaq"
          navRef={navRef}
          iconRef={iconRef}
          menuRef={menuRef}
        />
        <Navbarlinkmob
          title="Register"
          route="/#mobilecontactus"
          navRef={navRef}
          iconRef={iconRef}
          menuRef={menuRef}
        />
      </div>
    </nav>
  );
};

export default Navbar;
