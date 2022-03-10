import logo from "../assets/wildbeatslogo.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#2D4769]/0 to-[#000000]/100 text-white w-full">
      <div className="flex flex-col md:flex-row flex-nowrap justify-between items-center">
        <img src={logo} alt="wildbeats logo" className="w-64 mx-20"></img>
        <div className="mt-5 flex flex-row flex-nowrap justify-around items-center text-base lg:text-xl mx-auto lg:mx-20">
          <i className="fa-brands fa-facebook-f mx-4"></i>
          <i className="fa-brands fa-youtube mx-4"></i>
          <i className="fa-brands fa-twitter mx-4"></i>
          <i className="fa-solid fa-envelope mx-4"></i>
          <i className="fa-brands fa-twitch mx-4"></i>
          <i className="fa-brands fa-instagram mx-4"></i>
        </div>
      </div>
      <p className="font-montserrat text-center py-6 text-base">
        Made with <i className="fa-solid fa-heart text-red-600"> </i> by
        Wildbeats
      </p>
    </div>
  );
};

export default Footer;
