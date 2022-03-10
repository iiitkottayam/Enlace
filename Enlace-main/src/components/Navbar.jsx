import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Navbarlink from "./Navbarlink";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Navbar = () => {

	const scroller = (e) => {
		const panelsContainer = document.querySelector(".PanelsContainer");
		const page = document.querySelector(".page");
		const vertical = document.querySelector(".vertical");
		let targetElem = document.querySelector(e), y = targetElem;
		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
			var totalScroll = page.offsetWidth,
				totalMovement = (5) * targetElem.offsetWidth;
			y = Math.round(vertical.offsetHeight + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
			},
			duration: 1
		});
	}

	useEffect(() => {

		document.querySelectorAll("#anchor").forEach(anchor => {
			anchor.addEventListener("click", (e) => {
				e.preventDefault();

				if(window.location.pathname !== "/"){
					window.location.assign(`/?loc=${e.target.getAttribute("href").slice(1)}`);
					sessionStorage.setItem("load", true);
				}
				else{
					scroller(e.target.getAttribute("href"));
				}	
			});
		})

	}, []);

	if(sessionStorage.getItem("load")){
		const params = new URLSearchParams(window.location.search);
		console.log(params.get("loc"));
		setTimeout(() => scroller("#" + params.get("loc")), 300);
		sessionStorage.setItem("load", false);
	}

	return (
		<nav className="hidden md:flex box-border container  absolute top-3 left-0 right-0  justify-between px-7 py-2 mx-auto border-solid border-2 border-[#A9FF40] border-border-nav[0.69] bg-bg-nav/[0.6] backdrop-blur-md rounded-full ">
			<div>
				<Link to = "/">
					<div className="md:flex items-center">
						<img className="h-10 w-14 pr-2" src={logo} alt="logo" />
						<h3 className="text-2xl xl:text-3xl text-white font-reemkufi">ENLACE</h3>
					</div>
				</Link>
			</div>
			<div className="hidden space-x-8 lg:space-x-12 xl:space-x-16 text-[#ffffffd6] font-medium md:text-sm lg:text-lg font-poppins md:flex items-center">
				<Navbarlink title="Competitions" route="/competitions" />
				<Navbarlink title="Events" route="/events" />
				<div>
					<Navbarlink title="About us" route="/" />
					<div
						className="peer text-[#00000000] select-none cursor-pointer absolute py-5 -mt-10"
					>
						About us
					</div>
					<nav
						className="transition-transform duration-300 origin-top scale-y-0 peer-hover:scale-y-100 hover:scale-y-100 md:flex flex-col text-center box-border container w-40 h-36 absolute top-16 justify-between px-0 py-4 -mx-9 items-center border-solid border-2 border-[#A9FF40] border-border-nav[0.69] bg-bg-nav/[0.6] backdrop-blur-md rounded-2xl "
					>
						<Navbarlink title="Who We Are" route="/whoweare" />
						<Navbarlink title="Contact Us" route="/contactus" />
						<Navbarlink title="Team" route="/team" />
					</nav>
				</div>
				<a href = "#sponsors"
					className="sponsors relative hover:after:scale-x-100 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform"
					id = "anchor"
				>
					Sponsors
				</a>
				<a href = "#faq"
					className="faq relative hover:after:scale-x-100 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform"
					id = "anchor"
				>
					FAQ
				</a>
				<div className="text-[#A9FF40d6]">
					<a href = "#register"
						className="register relative hover:after:scale-x-100 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform"
						id = "anchor"
					>
						Register
					</a>
				</div>
			</div>
			<div className="flex md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</div>
		</nav>
	);
};

export default Navbar;
