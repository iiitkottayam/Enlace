import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/fake_it_till_you_make_it.jpg";

const Example = () => {
  const eventname = "Fake it Till You Make It";
  const highlight = "A Solo Monoact Competition";
  const details = `Ever seen a viral act video and thought, "Man, I could make a video better than this…"? Ever read a story and wished, "Man, only if the story ended like this"? Ever been in a play or a skit, and wished for more creative freedom? If your answer to any of the above questions is yes, "Fake it till you make it" is just the event for you!
  So what are you waiting for? Sign up to our mono act competition and make the world laugh and cry.
  “All the world's a stage.” ― William Shakespeare
  `;
  const date = "March 31st, 2022";
  const time = "7:00 PM";
  const org1name = "Arundhathy.K";
  const org1mail = "arundhathyk20bec10@iiitkottayam.ac.in";
  const org1phone = "9567632553";
  const org2name = "Sravan kumar.K";
  const org2mail = "ravankumar20bcs150@iiitkottayam.ac.in ";
  const org2phone = "7793998142";
  const link = "https://docs.google.com/forms/d/e/1FAIpQLScgcr3PZVpJKPgTxXL-zFkJXz3Rb7i4gRDiVUexWlkMvl8bSw/viewform";

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
