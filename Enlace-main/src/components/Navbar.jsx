import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="hidden md:flex box-border container  absolute top-0 left-0 right-0  justify-between px-4 py-5 mx-auto border-solid border-2 border-border-nav[0.69] bg-bg-nav/[0.6] rounded-full ">
      <div className="text-white">
        <h3 className="text-4xl font-medium text-700 ">
          <img className="h-12 w-18 float-left pr-2" src={logo} alt="logo" /> 
          Enlace
        </h3>
      </div>
      <div className="hidden space-x-8 text-500 text-white lg:space-x-16  md:flex items-center">
        <a href="">Events</a>
        <a href="">Sponsors</a>
        <a href="">FAQ</a>
        <a href="">Performace</a>
        <a href="">Workshops</a>
        <a href="">Contact</a>
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
