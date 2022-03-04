import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Horizontal from "./components/Horizontal";
import Vertical from "./components/Vertical";
import Competitions from "./components/Competitions";
import Events from "./components/Events";

const App = () => {
  AOS.init({
    mirror: true,
  });

  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <>
              <Vertical />
              <Horizontal />
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
