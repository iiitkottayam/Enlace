import { HashLink as Link } from "react-router-hash-link";

const urls = [
	{
		name: "lg",
		url: "https://res.cloudinary.com/roshin/image/upload/v1647343340/Events/Workshops/ENLACENITE_Web_amevlo.png",
	},
	{
		name: "md",
		url: "https://res.cloudinary.com/roshin/image/upload/v1647345992/Events/Workshops/ENLACENITE_Mobile_lt658z.png",
	},
	{
		name: "sm",
		url: "https://res.cloudinary.com/roshin/image/upload/v1647343340/Events/Workshops/ENLACENITE_instagram_ttw9ty.png",
	},
];

const EnlaceNiteBanner = ({ path }) => {
	return (
		<Link to={path + "#"}>
			<div className="w-10/12 h-[353px] bg-white/50 rounded-3xl mx-auto my-10">
				<img
					src={urls[0].url}
					alt="nite_banner"
					className="h-full w-full rounded-3xl hidden lg:block"
				></img>
				<img
					src={urls[1].url}
					alt="nite_banner"
					className="h-full w-full rounded-3xl hidden sm:block lg:hidden"
				></img>
				<img
					src={urls[2].url}
					alt="nite_banner"
					className="h-full w-full rounded-3xl sm:hidden"
				></img>
			</div>
		</Link>
	);
};

EnlaceNiteBanner.defaultProps = {
	title: "Enlace Nite",
	image: urls[0].url,
	path: "/example",
};

export default EnlaceNiteBanner;
