import { dayDetails } from "../Timeline/timelineData"

const DescBox = ({ day }) => {

    const startDate = 21;
    const postfix = (date) => {
        switch (date % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }  

    return (
        <>
            <div className="text-left">
                <h1 className="font-reemkufi lg:text-7xl text-white my-3">Day {day}</h1>
                <h3 className="font-reemkufi lg:text-5xl text-white">{startDate + day - 1}{postfix(startDate + day - 1)} March</h3>
            </div>
            <p className = "font-poppins lg:text-2xl text-white text-left mt-10">{dayDetails[day].desc}</p>
            <div className = "flex flex-row mt-10">
                <div className = "lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-gradient-start to-gradient-stop mr-3"></div>
                <p className = "lg:text-2xl text-white font-semibold"><span className = "font-bold underline">Highlight:</span> {dayDetails[day].highlight}</p>
            </div>
        </>
    )
}

export default DescBox
