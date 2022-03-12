import Nav from "../Navbar.jsx";
import Eventteaser from "../Boxes/Eventteaser.jsx";
import Footer from "../Footer.jsx";
import examplelogo from "../../assets/Enlace-logo-name.png";
import FakeItTillYouMakeIt from "../../assets/fake_it_till_you_make_it.jpg";
import FindtheFiend from "../../assets/1080x1080-Find_the_Fiend_Instagram.png";
import DancingWithTheDevil from "../../assets/DancingWithTheDevil_Instagram.png";
import PulseAndTheBeat from "../../assets/PulseAndTheBeat_Instagram.png";
import JokesOnTheHouse from "../../assets/Jokes_on_the_house_INSTAGRAM.png";
import StringsAndKeys from "../../assets/StringsAndKeys_Instagram.jpg";
import BeyondTheHarmony from "../../assets/BeyondTheHarmony_Instagram.png";
import DevilAdvocate from "../../assets/Devil_s advocate instagram.png";
import Blizzart from "../../assets/BLIZZART_Instagram.png";
import BattleOfBands from "../../assets/Battle Of Bands Instagrm.jpg";
import MxEnlace from "../../assets/MxEnlace_Instagram.png";

const Competitions = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
      <div className="h-full w-full bg-competitions-bg relative">
        <Nav />
        <div className="h-full w-full pt-36">
          <h1 className="font-reemkufi text-4xl text-white text-center">
            Competitions
          </h1>
          <div className="mx-auto h-full w-5/6 flex flex-row flex-wrap justify-around items-center">
            <Eventteaser
              title="Through The Lens"
              image={examplelogo}
              path="/competitions/through-the-lens"
            />
            <Eventteaser
              title="Fake It Till You Make It"
              image={FakeItTillYouMakeIt}
              path="/competitions/fake-it-till-you-make-it"
            />
            <Eventteaser
              title="Find The Fiend"
              image={FindtheFiend}
              path="/competitions/find-the-fiend"
            />
            <Eventteaser
              title="Dancing With The Devil"
              image={DancingWithTheDevil}
              path="/competitions/dancing-with-the-devil"
            />
            <Eventteaser
              title="Pulse And The Beat"
              image={PulseAndTheBeat}
              path="/competitions/pulse-and-the-beat"
            />
            <Eventteaser
              title="Jokes On The House"
              image={JokesOnTheHouse}
              path="/competitions/jokes-on-the-house"
            />
            <Eventteaser
              title="Strings And Keys"
              image={StringsAndKeys}
              path="/competitions/strings-and-keys"
            />
            <Eventteaser
              title="Beyond The Harmony"
              image={BeyondTheHarmony}
              path="/competitions/beyond-the-harmony"
            />
            <Eventteaser
              title="Devil's Advocate"
              image={DevilAdvocate}
              path="/competitions/devils-advocate"
            />
            <Eventteaser 
              title="Blizzart" 
              image={Blizzart}
              path="/competitions/blizzart"
            />
            <Eventteaser
              title="Battle Of Bands"
              image={BattleOfBands}
              path="/competitions/battle-of-the-bands"
            />
            <Eventteaser 
              title="Mx. Enlace"
              image={MxEnlace} 
              path="/competitions/mx-enlace"
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

export default Competitions;
