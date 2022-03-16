import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TeamBox from "../Boxes/TeamBox.jsx";
import TeamBoxSm from "../Boxes/TeamBoxSm.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Teams = () => {
  return (
    <HelmetProvider>
      <Helmet>
          <title>Enlace | Teams</title>
      </Helmet>
      <div className="relative bg-black lg:bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
        <div className="h-max lg:h-screen w-full bg-competitions-bg relative flex flex-col">
          <div className="relative h-1/6">
            <Nav />
          </div>
          <div className="text-white h-5/6 text-center">
            <div id="desktop" className="hidden h-full lg:flex flex-col">
              <TeamBox />
            </div>
            <div id="mobile" className="lg:hidden h-full pt-28 pb-8">
              <TeamBoxSm />
            </div>
          </div>
        </div>
        <div className="pt-48 lg:pt-36">
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Teams;
