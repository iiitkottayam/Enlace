import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "aos/dist/aos.css";
import Horizontal from "./components/Horizontal/Horizontal";
import Vertical from "./components/Vertical/Vertical";
import Competitions from "./components/Pages/Competitions";
import Events from "./components/Pages/Events";
import frame from "./assets/Frame.png";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  
  AOS.init({
    mirror: true,
  });

  useEffect(() => {
    gsap.to(".bg", {
      xPercent: -100, 
      x: () => window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".bg",
        scrub: 1,
        pin: true,
        end: () => "+=" + window.innerWidth
      }
    });
  }, []);

  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <>
              <Vertical />
              <div className="hidden lg:block" style = {{overflow: "hidden"}}>
                <div className = "bg" style = {{backgroundImage: `url(${frame})`, height: "100vh", width: "500vw", backgroundSize: "cover"}}>
                  <Horizontal />
                </div>
              </div>
            </>
          </Route>
          <Route exact path="/competitions">
            <Competitions />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
