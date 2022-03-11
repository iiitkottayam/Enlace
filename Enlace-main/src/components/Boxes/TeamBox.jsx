import { useEffect, useState } from "react";
import { teams } from "../../data/teamData"
import styles from "../../Styles/teamBox.module.css";
import { FaChevronDown } from "react-icons/fa";

const TeamBox = () => {
    
    const [option, setOption] = useState("core");

    useEffect(() => {
        document.querySelectorAll(".option").forEach(option => {
            option.addEventListener("click", (e) => {
                setOption(e.target.getAttribute("id"));
            });
        });
    }, []);

    return (
        <>
            <div className = "font-semibold text-5xl m-0" style = {{height: "10%"}}>
                Team
            </div>
            <div className = "flex justify-center" style = {{height: "90%"}}>
                <div className = "h-full w-1/3 flex justify-center items-center">
                    <div className = "bg-white/40 h-5/6 w-2/3 rounded-xl flex flex-col justify-evenly items-center text-3xl">
                        <div className = {"option cursor-pointer " + (option === "core" ? "text-[#A9FF40d6]" : "text-white")} id = "core">Core Team</div>
                        <div className = {"option cursor-pointer " + (option === "managers" ? "text-[#A9FF40d6]" : "text-white")} id = "managers">Event Managers</div>
                        <div className = {"option cursor-pointer " + (option === "sponsor" ? "text-[#A9FF40d6]" : "text-white")} id = "sponsor">Sponsorship</div>
                        <div className = {"option cursor-pointer " + (option === "design" ? "text-[#A9FF40d6]" : "text-white")} id = "design">Designing</div>
                        <div className = {"option cursor-pointer " + (option === "webd" ? "text-[#A9FF40d6]" : "text-white")} id = "webd">Web Dev</div>
                    </div>
                </div>
                <div className = "h-full w-2/3 flex flex-col justify-center items-left relative">
                    <div className = {"members grid grid-cols-4 h-5/6 gap-10 overflow-auto justify-center items-center " + styles.members} style = {{width: "90%"}}>
                        {
                            teams[option].map(person => {
                                return (
                                    <div className = "flex flex-col justify-center items-center" style = {{height: "12rem"}}>
                                        <div className = "w-full bg-white/40 flex flex-col justify-evenly items-center rounded-2xl" style = {{height: "90%"}}>
                                            <img className = "w-2/3 h-2/3 rounded-full" src = {person.pic} alt = "members"></img>
                                            <div className = "font-semibold text-lg">{person.name}</div>
                                        </div>
                                        <div className = "font-semibold text-lg" style = {{height: "10%"}}>
                                            {person.designation}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {teams[option].length > 8 ? <div className = "flex justify-center absolute bottom-3" style = {{width: "90%"}}><FaChevronDown size = "2rem"/></div> : ""}
                </div>
            </div>
        </>
      
    )
}

export default TeamBox
