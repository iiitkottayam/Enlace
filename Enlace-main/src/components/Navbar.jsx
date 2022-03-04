import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Navbarlink from "./Navbarlink";
import React, { useState } from "react";

const Navbar = () => {
	const [isShown, setIsShown] = useState(false);

	return (
		<nav className="hidden md:flex box-border container  absolute top-3 left-0 right-0  justify-between px-7 py-2 mx-auto border-solid border-2 border-[#DEBF75] border-border-nav[0.69] bg-bg-nav/[0.6] rounded-full ">
			<div className="text-white">
				<Link to="/">
					<div className="md:flex">
						<img
							className="h-10 w-14 float-left pr-2"
							src={logo}
							alt="logo"
						/>
						<h3 className="text-3xl font-reemkufi mt-0.5">
							ENLACE
						</h3>
					</div>
				</Link>
			</div>
			<div className="hidden space-x-8 text-500 text-[#ffffffd6] font-medium text-lg lg:space-x-16 font-poppins  md:flex items-center">
				<Navbarlink title="Competitions" route="/competitions" />
				<Navbarlink title="Events" route="/events" />
				<div>
					<Navbarlink title="About us" route="/" />
					<div
						className="text-[#00000000] select-none cursor-pointer absolute py-5 -mt-10"
						onMouseEnter={() => setIsShown(true)}
						onMouseLeave={() => setIsShown(false)}
					>
						About us
					</div>
					{isShown && (
						<nav
							data-aos="flip-left"
							data-aos-duration="500"
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
							className="hidden md:flex flex-col text-center box-border container w-40 h-36 absolute top-16 justify-between px-0 py-4 -mx-9 border-solid border-2 border-[#DEBF75] border-border-nav[0.69] bg-bg-nav/[0.6] rounded-2xl "
						>
							<Navbarlink title="Who We Are" route="/whoweare" />
							<Navbarlink title="Contact Us" route="/contactus" />
							<Navbarlink title="Team" route="/team" />
						</nav>
					)}
				</div>
				<Navbarlink title="Sponsors" route="/#sponsors" />
				<Navbarlink title="FAQ" route="/#faq" />
				<div className="text-[#A9FF40d6]">
					<Navbarlink title="Register" route="/#register" />
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
