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
import Teams from "./components/Pages/Teams";
import frame from "./assets/Frame.png";
import Example from "./components/Events/Example";
import Event1 from "./components/Events/through-the-lens";
import Event2 from "./components/Events/fake-it-till-you-make-it";
import Event3 from "./components/Events/find-the-fiend";
import Event4 from "./components/Events/dancing-with-the-devil";
import Event5 from "./components/Events/pulse-and-the-beat";
import Event6 from "./components/Events/jokes-on-the-house";
import Event7 from "./components/Events/strings-and-keys";
import Event8 from "./components/Events/beyond-the-harmony";
import Event9 from "./components/Events/devils-advocate";
import Event10 from "./components/Events/blizzart";
import Event11 from "./components/Events/battle-of-the-bands";
import Event12 from "./components/Events/mx-enlace";

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
        end: () => "+=" + window.innerWidth,
      },
    });
  }, []);

  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <>
              <Vertical />
              <div className="hidden lg:block" style={{ overflow: "hidden" }}>
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${frame})`,
                    height: "100vh",
                    width: "500vw",
                    backgroundSize: "cover",
                  }}
                >
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
          <Route exact path="/example">
            <Example />
          </Route>
          <Route exact path="/through-the-lens">
            <Event1 />
          </Route>
          <Route exact path="/fake-it-till-you-make-it">
            <Event2 />
          </Route>
          <Route exact path="/find-the-fiend">
            <Event3 />
          </Route>
          <Route exact path="/dancing-with-the-devil">
            <Event4 />
          </Route>
          <Route exact path="/pulse-and-the-beat">
            <Event5 />
          </Route>
          <Route exact path="/jokes-on-the-house">
            <Event6 />
          </Route>
          <Route exact path="/strings-and-keys">
            <Event7 />
          </Route>
          <Route exact path="/beyond-the-harmony">
            <Event8 />
          </Route>
          <Route exact path="/devils-advocate">
            <Event9 />
          </Route>
          <Route exact path="/blizzart">
            <Event10 />
          </Route>
          <Route exact path="/battle-of-the-bands">
            <Event11 />
          </Route>
          <Route exact path="/mx-enlace">
            <Event12 />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
