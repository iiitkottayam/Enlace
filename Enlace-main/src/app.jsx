import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Pages/Home";
import Competitions from "./components/Pages/Competitions";
import Events from "./components/Pages/Events";
import Teams from "./components/Pages/Teams";
import IndividualEvent from "./components/Events/IndividualEvent";
import { eventsdata } from "./data/eventsData";
import Preloader from "./components/Preloader";

const App = () => {
  AOS.init({
    mirror: true,
  });

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
        {eventsdata.competitions.map((eventObj, index) => {
          return (
            <Route exact path={eventObj.path} key = {index}>
              <IndividualEvent eventRef={eventObj} key = {index}/>
            </Route>
          );
        })}
        {eventsdata.workshops.map((eventObj, index) => {
          return (
            <Route exact path={eventObj.path} key = {index} >
              <IndividualEvent eventRef={eventObj} key = {index}/>
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
