import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/DancingWithTheDevil_Instagram.png";

const Example = () => {
  const eventname = "enter event name here";
  const highlight = "enter highlight of event here";
  const details = `“ We dance for laughter, we dance for tears, we dance for madness, we dance for fears,     
we dance for hopes, we dance for screams, we are the dancers, we create the dreams.” -Angela Monet
An intercollege event to showcase your talent. We invite vibrant youngsters to grab this opportunity to vibe, groove and feel alive. So all the dance lovers out there, are you ready to be a devil to Dance with the Devil!
A solo dance competition, wherein the participants have to submit a video of 2-4  minutes. All dance styles are welcomed. Judges will judge on the creativity,   choreography, performance, use of properties, expressions. 
`;
  const date = "March 19th, 2022";
  const time = "";
  const org1name = "S .Kavyanjali";
  const org1mail = "kavya20bcs157@iiitkottayam.ac.in";
  const org1phone = "9100484080";
  const org2name = "Karthika Madhu";
  const org2mail = "karthikamadhu20bec33@iiitkottayam.ac.in";
  const org2phone = "95159827629";
  const link = "https://docs.google.com/forms/d/e/1FAIpQLSe7GCMVD5H4GVv3cID1jDoIYAuDqpFXfYKaTJNSt7r0xbFLiA/viewform";

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
