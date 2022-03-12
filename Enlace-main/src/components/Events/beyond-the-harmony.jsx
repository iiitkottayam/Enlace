import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/BeyondTheHarmony_Instagram.png";

const Example = () => {
  const eventname = "Beyond the Harmony";
  const highlight = "";
  const details = `"If I can't fly, let me sing”-Stephen Sondheim. Singing is the soul of music . Music becomes bland if not followed by symphonous lyrics. A Nightingale's melody at night or a cuckoo’s koo at dawn, music is in nature itself . So to all those canaries that are proud of their voice, Enlace brings you Beyond the Harmony, a stage to prove your passion for music with vocals.`;
  const date = "March 19th, 2022";
  const time = "";
  const org1name = "Harini T";
  const org1mail = "harinit20bcs95@iiitkottayam.ac.in";
  const org1phone = "9597424654";
  const org2name = "";
  const org2mail = "";
  const org2phone = "";
  const link =
    "https://docs.google.com/forms/d/e/1FAIpQLScTQ6S6ydkHnKDKy_Gi0IIKFmdZ9KEfe4BsxU19ciHFD6-EQA/viewform";

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
