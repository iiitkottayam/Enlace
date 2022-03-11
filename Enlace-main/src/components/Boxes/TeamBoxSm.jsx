import { useEffect, useState } from "react";
import React from "react";
import { teams } from "../../data/teamData";
import styles from "../../Styles/teamBox.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TeamBoxSm = () => {

	const [carousel, setCarousel] = useState([0, 1, 2]);
	const [pages, setPages] = useState([
		{ id: "webd", name: "Web Devs" },
		{ id: "core", name: "Core Team" },
		{ id: "managers", name: "Managers" },
		{ id: "sponsor", name: "Sponsorship" },
		{ id: "design", name: "Designing" },
	]);

	const handleRotation = (dir) => {
		if(dir === "left"){
			const zero = carousel[0] - 1 < 0 ? 4 : carousel[0] - 1;
			const one = carousel[1] - 1 < 0 ? 4 : carousel[1] - 1;
			const two = carousel[2] - 1 < 0 ? 4 : carousel[2] - 1;
			setCarousel([zero, one, two]);
		}
		else{
			setCarousel([(carousel[0] + 1) % 5, (carousel[1] + 1) % 5, (carousel[2] + 1) % 5]);
		}
	}

	return (
		<>
			<div className="font-reemkufi text-4xl text-center">Team</div>
			<div className="flex pt-10 pb-16 justify-around items-center w-full">
				<FaChevronLeft size="1.5rem" className = "left" onClick = {() => handleRotation("left")}/>
				<div className="flex justify-between w-9/12 items-center font-reemkufi">
					<div className="opacity-60" style = {{fontSize: "1rem"}}>{pages[carousel[0]].name}</div>
					<div className="font-semibold" style = {{fontSize: "1.5rem"}}>{pages[carousel[1]].name}</div>
					<div className="opacity-60" style = {{fontSize: "1rem"}}>{pages[carousel[2]].name}</div>
				</div>
				<FaChevronRight size="1.5rem" className = "right" onClick = {() => handleRotation("right")}/>
			</div>

			<div className="">
				<div className="grid grid-cols-2 gap-6 w-11/12 mx-auto">
					{teams[pages[carousel[1]].id].map((person) => {
						return (
							<div className="flex flex-col justify-center items-center">
								<div className="w-full bg-white/40 flex flex-col justify-center items-center rounded-2xl px-3 py-5">
									<img
										className="w-4/5 h-4/5 rounded-full"
										src={person.pic}
										alt="members"
									></img>
									<div className="font-semibold pt-2" style = {{fontSize: "1rem"}}>{person.name}</div>
								</div>
								<div className="font-semibold my-3" style = {{fontSize: "1rem"}}>{person.designation}</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default TeamBoxSm;
