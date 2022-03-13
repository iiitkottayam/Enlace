import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/StringsAndKeys_Instagram.jpg";

const Example = () => {
  const eventname = "Strings and Keys";
  const highlight = "online instrumental competition";
  const details = `Ever wondered what the most beautiful sound in the 
  world is? A nightingale's cry? A snow wolf’s howl? They say that the most beautiful sound lies in the depths of nature, where there is no limit for melodious chimes. That’s why the path of music is never ending, so is the love it gets from people of passion. Show your love and passion towards music. Be it a trumpet or a keyboard, we welcome you all to participate in strings and keys of enlace. A music festival where nature is heard through your notes and tunes
  `;
  const date = "";
  const time = "";
  const org1name = "Akarsh Pandeyr";
  const org1mail = "akarshpandey20bcs83@iiitkottayam.ac.in";
  const org1phone = "9599362445";
  const org2name = "";
  const org2mail = "";
  const org2phone = "";
  const link = "https://forms.gle/V3d5wCmUYEzzSAKk9";

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
      <div className="h-full w-full bg-competitions-bg relative">
        <Nav />
        <div className="h-full w-full pt-36 space-y-10">
          <div className="lg:px-36 w-full flex flex-col space-y-10 sm:flex-row justify-between mx-auto">
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
