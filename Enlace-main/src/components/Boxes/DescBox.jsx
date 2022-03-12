import { dayDetails } from "../../data/timelineData";

const DescBox = ({ day }) => {
  const startDate = 21;
  const postfix = (date) => {
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <>
      <div className="text-left font-reemkufi text-white">
        <h1 className="lg:text-4xl xl:text-6xl my-3">Day {day}</h1>
        <h3 className="lg:text-3xl xl:text-4xl">
          {startDate + day - 1}
          {postfix(startDate + day - 1)} March
        </h3>
      </div>
      <p className="font-poppins lg:text-base xl:text-2xl text-white text-left mt-10">
        {dayDetails[day].desc}
      </p>
      <div className="flex flex-row mt-10">
        <div className="lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-gradient-start to-gradient-stop mr-3"></div>
        <p className="lg:text-lg xl:text-2xl text-white font-semibold">
          <span className="font-bold underline">Highlight:</span>{" "}
          {dayDetails[day].highlight}
        </p>
      </div>
    </>
  );
};

export default DescBox;
