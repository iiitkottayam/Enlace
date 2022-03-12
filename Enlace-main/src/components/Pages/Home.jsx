import Horizontal from "../Horizontal/Horizontal";
import Vertical from "../Vertical/Vertical";
import frame from "../../assets/Frame.png";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
