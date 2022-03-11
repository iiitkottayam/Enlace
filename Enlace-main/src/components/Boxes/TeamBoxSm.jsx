import { useEffect, useState } from "react";
import React from "react";
import { teams } from "../../data/teamData";
import styles from "../../Styles/teamBox.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TeamBoxSm = () => {
	const [option, setOption] = useState("core");

	useEffect(() => {
		document.querySelectorAll(".option").forEach((option) => {
			option.addEventListener("click", (e) => {
				setOption(e.target.getAttribute("id"));
			});
		});
	}, []);

	const pages = [
		{ id: 0, name: "Design" },
		{ id: 1, name: "Core Team" },
		{ id: 2, name: "PR Team" },
		{ id: 3, name: "Managers" },
		{ id: 4, name: "Web Dev" },
	];

	return (
		<>

			<div className="font-reemkufi text-4xl">Team</div>

			<div className="flex justify-center pt-10 pb-16 justify-around items-center w-full">
				<FaChevronLeft size="1.5rem" />

				<div className="flex justify-center justify-between w-9/12 items-center font-reemkufi pl-3">
					<div className="opacity-60">{pages[0].name}</div>
					<div className="text-xl font-semibold">{pages[1].name}</div>
					<div className="opacity-60">{pages[2].name}</div>
				</div>
        
				<FaChevronRight size="1.5rem" />
			</div>


			<div className="">
				<div className="grid grid-cols-2 gap-6 w-11/12 mx-auto">

					{teams[option].map((person) => {
						return (
							<div className="flex flex-col justify-center items-center">
								<div className="w-full bg-white/40 flex flex-col justify-center items-center rounded-2xl px-3 py-5">
									<img
										className="w-4/5 h-4/5 rounded-full"
										src={person.pic}
										alt="members"
									></img>
									<div className="font-semibold text-lg pt-2">{person.name}</div>
								</div>
								<div className="font-semibold text-lg mt-3">
									{person.designation}
								</div>
							</div>
						);
					})}

				</div>
			</div>

		</>
	);
};

export default TeamBoxSm;
