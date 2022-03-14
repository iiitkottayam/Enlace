import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "aos/dist/aos.css";
import Home from "./components/Pages/Home";
import Competitions from "./components/Pages/Competitions";
import Events from "./components/Pages/Events";
import Teams from "./components/Pages/Teams";
import IndividualEvent from "./components/Events/IndividualEvent";
import { eventsdata } from "./data/eventsData";
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
        {eventsdata.competitions.map((eventObj) => {
          return (
            <Route exact path={eventObj.path}>
              <IndividualEvent eventRef={eventObj} />
            </Route>
          );
        })}
        {eventsdata.workshops.map((eventObj) => {
          return (
            <Route exact path={eventObj.path}>
              <IndividualEvent eventRef={eventObj} />
            </Route>
          );
        })}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
