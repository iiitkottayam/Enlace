import index from "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Horizontal from "./components/Horizontal";
import Vertical from "./components/Vertical";

const App = () => {
  AOS.init({
    mirror: true,
  });

  return (
    <>
      <Vertical />
      <div className="hidden lg:block">
      <Horizontal />
      </div>
    </>
  );
};

export default App;
