import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/Photography instagram.jpg";

const Example = () => {
  const eventname = "Through the Lens";
  const highlight = "Photography event";
  const details = `Photography is a way of expressing a situation. What you capture with your lens will be with you forever, it can be helpful to evoke the situation in the photo even after many years. Taking a photo, freezing a moment reveals innate reality. Yes, my lens can do all this with perfection`;
  const date = "";
  const time = "";
  const org1name = "A.K. Sashank";
  const org1mail = "krishnasashank20bcs26@iiitkottayam.ac.in";
  const org1phone = "8074189474";
  const org2name = "Ankur Kumar Mandal";
  const org2mail = "ankurmandal20bcs34@iiitkottayam.ac.in";
  const org2phone = "9182024792";
  const link =
    "https://docs.google.com/forms/d/e/1FAIpQLScHXQz0MXDmADjUE-uxakG4rThcAe6ThbykNbCY63dntD1MTQ/viewform ";

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
