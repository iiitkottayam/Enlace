import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/MxEnlace_Instagram.png";

const Example = () => {
  const eventname = "Mx. Enlace";
  const highlight = "Personality Hunt";
  const details = `Do you feel like you walk with the elegance of a queen? Or are you a debonair young man? Do you have the wits to grab eyeballs? Are you the life of every party?

  If you are any of those things, here’s the event you’ve been waiting for. MX Enlace is here to give you the platform you deserve. It’s an unmissable opportunity to show the best version of yourself. It’s a litmus test of your attitude, your personality and your intellect
  `;
  const date = "April 1st, 2022";
  const time = "8PM";
  const org1name = "Arundhati J Kartha";
  const org1mail = "arundhatikartha20bcs130@iiitkottayam.ac.in ";
  const org1phone = "8078969417";
  const org2name = "Adithyadev Mattada";
  const org2mail = "adithyadevm20bec23@iiitkottayam.ac.in ";
  const org2phone = "7559888295";
  const link = "https://forms.gle/nD8vtTcYPPi4Dcnv6 ";

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
      <div className="h-full w-full bg-competitions-bg relative">
        <Nav />
        <div className="h-full w-full pt-36 space-y-10">
          <div className=" w-full flex flex-col space-y-10 sm:flex-row justify-around mx-auto ">
            <TextBox heading={eventname} content={highlight} />

            <div className="flex flex-col items-center justify-around">
              <img
                src={image}
                alt="event poster"
                className="w-48 h-48 lg:w-72 lg:h-72 mx-auto rounded-2xl mb-5"
              ></img>
              <CommonButton link={link} />
            </div>
          </div>
          <div className="lg:px-36 ">
            <TextBox heading="Details" content={details} />
            <TimeBox date={date} time={time} />
            <TextBox
              heading="Contact The Organizers"
              content="Want more details related to this event, feel free to contact the Event Organiser."
              className="pb-4"
            />
            <Orglist
              org1={org1name}
              org1det={org1mail}
              ph1={org1phone}
              org2={org2name}
              org2det={org2mail}
              ph2={org2phone}
            />
          </div>
        </div>
        <div className="pt-48 lg:pt-36">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Example;
