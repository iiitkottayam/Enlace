import { HashLink as Link } from "react-router-hash-link";

const urls = [
	{
		name: "placeholder",
		url: "https://res.cloudinary.com/roshin/image/upload/v1647279775/Events/jokesonthehouse_yc3cqu.png",
	},
];

const Eventteaser = ({ title, image, path }) => {
	return (
		<Link
			to={path + "#"}
			className="m-10 p-5 bg-gradient-to-r from-gradient-start to-gradient-stop rounded-xl flex flex-col flex-nowrap justify-center items-center w-80 h-full"
		>
			<img
				src={image}
				alt="event poster"
				className="w-64 h-64 rounded-lg mb-5"
			></img>
			<p className="font-poppins font-medium text-xl text-center">{title}</p>
		</Link>
	);
};

Eventteaser.defaultProps = {
	title: "Jokes on the house",
	image: urls[0].url,
	path: "/example",
};

export default Eventteaser;
