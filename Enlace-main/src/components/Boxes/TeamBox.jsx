import { useEffect, useState } from "react";
import { teams } from "../../data/teamData";
import styles from "../../Styles/teamBox.module.css";
import { FaChevronDown } from "react-icons/fa";

const TeamBox = () => {
  const [option, setOption] = useState("core");

  useEffect(() => {
    document.querySelectorAll(".option").forEach((option) => {
      option.addEventListener("click", (e) => {
        setOption(e.target.getAttribute("id"));
      });
    });
  }, []);

  return (
    <>
      <div className="font-reemkufi text-6xl m-0" style={{ height: "10%" }}>
        Team
      </div>
      <div className="flex justify-center" style={{ height: "90%" }}>
        <div className="h-full w-1/3 flex justify-center items-center">
          <div className="bg-white/40 h-5/6 w-2/3 rounded-xl flex flex-col justify-evenly items-center text-3xl font-poppins font-medium">
            <div
              className={
                "option cursor-pointer " +
                (option === "core" ? "text-[#A9FF40]" : "text-white/85")
              }
              id="core"
            >
              Core Team
            </div>
            <div
              className={
                "option cursor-pointer " +
                (option === "sponsor" ? "text-[#A9FF40]" : "text-white/85")
              }
              id="sponsor"
            >
              Sponsorship
            </div>
            <div
              className={
                "option cursor-pointer " +
                (option === "managers" ? "text-[#A9FF40]" : "text-white/85")
              }
              id="managers"
            >
              Event Managers
            </div>
            <div
              className={
                "option cursor-pointer " +
                (option === "webd" ? "text-[#A9FF40]" : "text-white/85")
              }
              id="webd"
            >
              Web Devlopers
            </div>
            <div
              className={
                "option cursor-pointer " +
                (option === "design" ? "text-[#A9FF40]" : "text-white/85")
              }
              id="design"
            >
              Designing
            </div>
          </div>
        </div>
        <div className="h-full w-2/3 flex flex-col justify-center items-left relative">
          <div
            className={
              "members grid grid-cols-4 h-5/6 gap-x-8 gap-y-14 overflow-auto justify-center items-center " +
              styles.members
            }
            style={{ width: "90%" }}
          >
            {teams[option].map((person) => {
              return (
                <div
                  className="flex-1 flex-col justify-center items-center mt-5"
                  style={{ height: "16rem" }}
                >
                  <div data-aos="zoom-in" className="w-full h-full bg-white/40 hover:bg-white/50 active:bg-white/30 transition duration-300 flex flex-col items-center rounded-2xl pb-4 pt-5 px-3">
                    <img
                      className="w-36 h-36 rounded-full"
                      data-aos="zoom-out"
                      data-aos-duration="2000"
                      src={person.pic}
                      alt="members"
                    ></img>
                    <div className="font-medium text-lg font-poppins pt-4">
                      {person.name}
                    </div>
                  </div>
                  <div
                    className="font-medium text-lg font-poppins pt-1"
                    style={{ height: "10%" }}
                  >
                    {person.designation}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="flex justify-center absolute bottom-3"
            style={{ width: "90%" }}
          >
            <FaChevronDown size="2rem" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamBox;
