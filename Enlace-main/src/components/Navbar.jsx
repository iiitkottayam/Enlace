import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Navbarlink from "./Navbarlink";

const Navbar = () => {

	return (
		<nav className="hidden md:flex box-border container  absolute top-3 left-0 right-0  justify-between px-7 py-2 mx-auto border-solid border-2 border-[#A9FF40] border-border-nav[0.69] bg-bg-nav/[0.6] backdrop-blur-md rounded-full ">
			<div>
				<Link to="/">
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
