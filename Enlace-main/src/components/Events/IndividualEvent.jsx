import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";

const IndividualEvent = ({ eventRef }) => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
      <div className="h-full w-full bg-competitions-bg relative">
        <Nav />
        <div className="h-full w-full pt-36 space-y-10">
          <div className="lg:px-36 w-full flex flex-col space-y-10 sm:flex-row justify-between mx-auto">
            <TextBox heading={eventRef.title} content={eventRef.highlight} />

            <div className="flex flex-col items-center justify-around">
              <img
                src={eventRef.imageRef}
                alt="event poster"
                className="w-48 h-48 lg:w-72 lg:h-72 mx-auto rounded-2xl mb-5"
              ></img>
              <CommonButton link={eventRef.link} />
            </div>
          </div>
          <div className="lg:px-36">
            <TextBox heading="Details" content={eventRef.details} />
            <TimeBox date={eventRef.date} time={eventRef.time} />
            <TextBox
              heading="Contact The Organizers"
              content="Want more details related to this event, feel free to contact the Event Organiser."
              className="pb-4"
            />
            <Orglist
              org1={eventRef.org1name}
              org1det={eventRef.org1mail}
              ph1={eventRef.org1phone}
              org2={eventRef.org2name}
              org2det={eventRef.org2mail}
              ph2={eventRef.org2phone}
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

export default IndividualEvent;
