import placeholder from "../../assets/eventposterplaceholder.png";

const Eventteaser = ({ title, image }) => {
  return (
    <div className="m-10 w-72 h-80 bg-gradient-to-r from-gradient-start to-gradient-stop rounded flex flex-col flex-nowrap justify-evenly items-center">
      <img src={image} alt="event poster" className="w-64 h-64 rounded"></img>
      <p className="font-poppins font-medium text-xl">{title}</p>
    </div>
  );
};

Eventteaser.defaultProps = {
  title: "Jokes on the house",
  image: placeholder,
};

export default Eventteaser;
