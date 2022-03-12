import Nav from "../Navbar.jsx";
import Eventteaser from "../Boxes/Eventteaser.jsx";
import Footer from "../Footer.jsx";
import examplelogo from "../../assets/Enlace-logo-name.png";

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
              path="/competitions/fake-it-till-you-make-it"
            />
            <Eventteaser
              title="Find The Fiend"
              path="/competitions/find-the-fiend"
            />
            <Eventteaser
              title="Dancing With The Devil"
              path="/competitions/dancing-with-the-devil"
            />
            <Eventteaser
              title="Pulse And The Beat"
              path="/competitions/pulse-and-the-beat"
            />
            <Eventteaser
              title="Jokes On The House"
              path="/competitions/jokes-on-the-house"
            />
            <Eventteaser
              title="Strings And Keys"
              path="/competitions/strings-and-keys"
            />
            <Eventteaser
              title="Beyond The Harmony"
              path="/competitions/beyond-the-harmony"
            />
            <Eventteaser
              title="Devil's Advocate"
              path="/competitions/devils-advocate"
            />
            <Eventteaser title="Blizzart" path="/competitions/blizzart" />
            <Eventteaser
              title="Battle Of Bands"
              path="/competitions/battle-of-the-bands"
            />
            <Eventteaser title="Mx. Enlace" path="/competitions/mx-enlace" />
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
