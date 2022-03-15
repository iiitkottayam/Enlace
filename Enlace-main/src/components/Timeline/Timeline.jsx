import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { events } from "../../data/timelineData";
import Box from "../Boxes/Box.jsx";
import EventBox from "../Boxes/EventBox";
import DescBox from "../Boxes/DescBox";

const Timeline = () => {
  const [currentDay, setCurrentDay] = useState(1);

  const dates = {
    1: "29th March",
    2: "30th March",
    3: "31st March",
    4: "1st April"
  }

  useEffect(() => {
    const date = new Date().getDate();

    switch (date) {
      case 30:
        setCurrentDay(2);
        break;
      case 31:
        setCurrentDay(3);
        break;
      case 1:
        setCurrentDay(4);
        break;
      default:
        setCurrentDay(1);
        break;
    }
  }, []);

  return (
    <div className="flex flex-row flex-nowrap w-full items-center justify-between">
      <div className="flex flex-col flex-nowrap items-center justify-between w-1/8">
        <div className = "text-center font-reemkufi text-white my-5 text-4xl">
          {dates[currentDay]}
        </div>
        <div
          onClick={() => {
            setCurrentDay(1);
          }}
        >
          <Box day={1} trigger={currentDay === 1 ? true : false} />
        </div>
        <div
          onClick={() => {
            setCurrentDay(2);
          }}
        >
          <Box day={2} trigger={currentDay === 2 ? true : false} />
        </div>
        <div
          onClick={() => {
            setCurrentDay(3);
          }}
        >
          <Box day={3} trigger={currentDay === 3 ? true : false} />
        </div>
        <div
          onClick={() => {
            setCurrentDay(4);
          }}
        >
          <Box day={4} trigger={currentDay === 4 ? true : false} />
        </div>
      </div>
      <div className="flex flex-col flex-nowrap justify-between w-3/8 ml-5">
        {events[currentDay].map((event, index) => {
          // wrap EventBox component with Link from react router dom when required
          return <Link to = {event.link} onClick = {() => window.scrollTo(0,0)}><EventBox key = {index} name={event.name} time={event.time} /></Link>;
        })}
      </div>
      <div className="flex flex-col flex-nowrap w-1/2 ml-20 h-full">
        <DescBox />
      </div>
    </div>
  );
};

export default Timeline;
