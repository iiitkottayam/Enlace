import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/Jokes_on_the_house_INSTAGRAM.png";

const Example = () => {
  const eventname = "enter event name here";
  const highlight = "enter highlight of event here";
  const details = `Details: “Comedy is the art of invigorating souls, the ploy to foil the devil and the medicine which cures the most threatening of diseases. “
                                                                                                                                        - nobody said that lol
I just made all of it up. That’s exactly what you need to do, make up fictitious stories, share your personal anecdotes, or deliver a dad joke which tickles the funny bone of people. Show off the comedian in you, and give us a hilarious night to remember
`;
  const date = "March 30th, 2022";
  const time = "5PM";
  const org1name = "Abhishek patil";
  const org1mail = "abhishekh2019@iiitkottayam.ac.in";
  const org1phone = "9400119476";
  const org2name = "Vignesh";
  const org2mail = "vignesh20bcs70@iiitkottayam.ac.in";
  const org2phone = "7025753981";
  const link = "";

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
