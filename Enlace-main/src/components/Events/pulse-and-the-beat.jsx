import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TextBox from "./TextBox.jsx";
import TimeBox from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton";
import image from "../../assets/eventposters/PulseAndTheBeat_Instagram.png";

const Example = () => {
  const eventname = "Pulse and Beat";
  const highlight = "enter highlight of event here";
  const details = `”Dance is the hidden language of the soul”.
  We always love how exhilarating swaying your hearts can be ,even more when you do it with your friends. So tie your laces and crack your knuckles cause we are going to spin and twirl our way to bop at Pulse and Beats,a group dance contest brought to you by ENLACE.
  `;
  const date = "";
  const time = "";
  const org1name = "B Subramanyam";
  const org1mail = "subramanyam20bcs77@iiitkottayam.ac.in";
  const org1phone = "9392682410";
  const org2name = "charan teja";
  const org2mail = "charanteja20bcs43@iiitkottayam.ac.in";
  const org2phone = "8688957441";
  const link = "https://forms.gle/SY3BJg8MwvxMh4oZ8";

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
