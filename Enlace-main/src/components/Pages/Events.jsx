import Nav from "../Navbar.jsx";
import Eventteaser from "../Boxes/Eventteaser.jsx";
import Footer from "../Footer.jsx";
import EnlaceNiteBanner from "../Boxes/EnlaceNiteBanner.jsx";
import { eventsdata } from "../../data/eventsData";

const Events = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
      <div className="h-full w-full bg-competitions-bg relative">
        <Nav />
        <div className="h-full w-full pt-36">
          <h1 className="font-reemkufi text-4xl text-white text-center">
            Enlace Nite
          </h1>
          <EnlaceNiteBanner />
          <h1 className="font-reemkufi text-4xl text-white text-center">
            Workshops
          </h1>
          <div className="mx-auto h-full w-5/6 flex flex-row flex-wrap justify-around items-center">
            {eventsdata.workshops.map((eventObj) => {
              return (
                <Eventteaser
                  title={eventObj.title}
                  image={eventObj.imageRef}
                  path={eventObj.path}
                />
              );
            })}
          </div>
        </div>
        <div className="pt-48 lg:pt-36">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Events;
