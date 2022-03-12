import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/BLIZZART_Instagram.png";

const Example = () => {
  const eventname = "Blizzart";
  const highlight = "Themed Art Competition";
  const details = `Themed Art Competition, Blizzart is an inter college themed art solo event aimed to let the artists of various colleges provide a stage to compete together on a single theme on the basis of their sketches/ drawings. So come out and show us your Creativity!`;
  const date = "March 29th, 2022";
  const time = "5:30PM";
  const org1name = "Divyansh Panwar";
  const org1mail = "divyanshpanwar20bcs67@iiitkottayam.ac.in";
  const org1phone = "6378080121";
  const org2name = "Shubham Anand";
  const org2mail = "shubhamanand20bcs93@iiitkottayam.ac.in";
  const org2phone = "9415876136";
  const link = "https://docs.google.com/forms/d/e/1FAIpQLSc6yD8UrY_fyQr80RfN629wfsA-af0E7vtKi6-eBeoDpg7T-A/viewform";

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
