import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/Battle Of Bands Instagrm.jpg";

const Example = () => {
  const eventname = "Battle of the Bands";
  const highlight = "A resplendent musical band event";
  const details = `Ever been to a concert and thought that you could have done it better? Have friends who have flair towards music?
  If yes then you don't have to whine about not having a stage to prove your knack for music. Be it jazz or blues we welcome you all. Call all your hyperactive music enthusiasts and show that your band can ROCK the stage. Battle of Bands is your chance to give the best concert of all time.
  `;
  const date = "March 19th, 2022";
  const time = "";
  const org1name = "Amritansh Singh";
  const org1mail = "amritanshsingh20bec17@iiitkottayam.ac.in";
  const org1phone = "8299217060";
  const org2name = "Sarthak Bindal";
  const org2mail = "sarthakbindal20bcs55@iiitkottayam.ac.in";
  const org2phone = "9009012267";
  const link =
    "https://docs.google.com/forms/d/e/1FAIpQLSdKS0uUoeS3hUHZJ6NIy7jEMt8tClnAVXSlssVkyvP2p3ohyA/viewform";

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769]">
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
