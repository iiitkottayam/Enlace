import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/Devil_s advocate instagram.png";

const Example = () => {
  const eventname = "enter event name here";
  const highlight = "enter highlight of event here";
  const details = "enter details here";
  const date = "March 25th, 2022";
  const time = "4:00 PM";
  const org1name = "name of 1st organizer";
  const org1mail = "email of 1st organizer";
  const org1phone = "phone number of 1st organizer";
  const org2name = "name of 2nd organizer";
  const org2mail = "email of 2nd organizer";
  const org2phone = "phone number of 2nd organizer";
  const link = "enter registration form link";

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
      <div className="h-full w-full bg-competitions-bg">
        <Nav />
        <div className="h-full w-full pt-36 space-y-10">
          <div className=" w-full flex flex-col space-y-10 lg:flex-row justify-around mx-auto ">
            <TextBox heading={eventname} content={highlight} />

            <div className="flex flex-col items-center justify-around">
              <img
                src={image}
                alt="event poster"
                className="lg:w-75 lg:h-75  mx-auto rounded-2xl mb-5"
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
        <Footer />
      </div>
    </div>
  );
};

export default Example;
