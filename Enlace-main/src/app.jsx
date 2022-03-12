import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "aos/dist/aos.css";
import Home from "./components/Pages/Home";
import Competitions from "./components/Pages/Competitions";
import Events from "./components/Pages/Events";
import Teams from "./components/Pages/Teams";
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
import Preloader from "./components/Preloader";

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
      <Preloader />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/competitions">
          <Competitions />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/teams">
          <Teams />
        </Route>
        <Route exact path="/example">
          <Example />
        </Route>
        <Route exact path="/competitions/through-the-lens">
          <Event1 />
        </Route>
        <Route exact path="/competitions/fake-it-till-you-make-it">
          <Event2 />
        </Route>
        <Route exact path="/competitions/find-the-fiend">
          <Event3 />
        </Route>
        <Route exact path="/competitions/dancing-with-the-devil">
          <Event4 />
        </Route>
        <Route exact path="/competitions/pulse-and-the-beat">
          <Event5 />
        </Route>
        <Route exact path="/competitions/jokes-on-the-house">
          <Event6 />
        </Route>
        <Route exact path="/competitions/strings-and-keys">
          <Event7 />
        </Route>
        <Route exact path="/competitions/beyond-the-harmony">
          <Event8 />
        </Route>
        <Route exact path="/competitions/devils-advocate">
          <Event9 />
        </Route>
        <Route exact path="/competitions/blizzart">
          <Event10 />
        </Route>
        <Route exact path="/competitions/battle-of-the-bands">
          <Event11 />
        </Route>
        <Route exact path="/competitions/mx-enlace">
          <Event12 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
