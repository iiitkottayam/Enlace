import logo from "../assets/wildbeatslogo.png";

const Footer = () => {
  return (
    <div className="absolute bottom-0 bg-gradient-to-b from-[#2D4769]/0 to-[#000000]/100 text-white w-full">
      <div className="flex flex-col md:flex-row flex-nowrap justify-between items-center">
        <img src={logo} alt="wildbeats logo" className="w-64 mx-20"></img>
        <div className="mt-5 flex flex-row flex-nowrap justify-around items-center text-base lg:text-xl mx-auto lg:mx-20">
          <a
            href="https://www.youtube.com/channel/UCTXmRiVLxOiu214yRVfNdKQ"
            target="_blank"
          >
            <i className="fa-brands fa-youtube mx-4"></i>
          </a>
          <a href="mailto:wildbeats@iiitkottayam.ac.in" target="_blank">
            <i className="fa-solid fa-envelope mx-4"></i>
          </a>
          <a href="https://www.instagram.com/enlace_iiitk/" target="_blank">
            <i className="fa-brands fa-instagram mx-4"></i>
          </a>
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
