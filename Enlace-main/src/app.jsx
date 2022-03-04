import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Horizontal from "./components/Horizontal/Horizontal";
import Vertical from "./components/Vertical/Vertical";
import Competitions from "./components/Pages/Competitions";
import Events from "./components/Pages/Events";

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
              <div className="hidden lg:block">
                <Horizontal />
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
