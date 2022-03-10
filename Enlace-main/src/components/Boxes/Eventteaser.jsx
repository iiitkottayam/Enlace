import placeholder from "../../assets/eventposters/eventposterplaceholder.png";
import { HashLink as Link } from "react-router-hash-link";

const Eventteaser = ({ title, image, path }) => {
  return (
    <Link
      to={path + "#"}
      className="m-10 p-5 bg-gradient-to-r from-gradient-start to-gradient-stop rounded-lg flex flex-col flex-nowrap justify-evenly items-center"
    >
      <img
        src={image}
        alt="event poster"
        className="w-64 h-64 rounded mb-5"
      ></img>
      <p className="font-poppins font-medium text-xl">{title}</p>
    </Link>
  );
};

Eventteaser.defaultProps = {
  title: "Jokes on the house",
  image: placeholder,
  path: "/example",
};

export default Eventteaser;
