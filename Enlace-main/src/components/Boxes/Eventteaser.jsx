import placeholder from "../../assets/eventposterplaceholder.png";

const Eventteaser = ({ title, image }) => {
  return (
    <div className="m-10 p-5 bg-gradient-to-r from-gradient-start to-gradient-stop rounded-lg flex flex-col flex-nowrap justify-evenly items-center">
      <img
        src={image}
        alt="event poster"
        className="w-64 h-64 rounded mb-5"
      ></img>
      <p className="font-poppins font-medium text-xl">{title}</p>
    </div>
  );
};

Eventteaser.defaultProps = {
  title: "Jokes on the house",
  image: placeholder,
};

export default Eventteaser;
