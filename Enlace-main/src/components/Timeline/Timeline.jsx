import { useState } from "react";
import { events } from "./timelineData";
import Box from "../Boxes/Box.jsx";
import EventBox from "../Boxes/EventBox";

const Timeline = () => {

	const [day, setDay] = useState([true, false, false, false, false])
	const [currentDay, setCurrentDay] = useState(1);

    return (
      	<div className = "flex flex-row flex-nowrap w-full items-center justify-evenly">
      	    <div className = "h-5/6 flex flex-col flex-nowrap items-center">
      	    	<div onClick = {() => {setDay([true, false, false, false, false]); setCurrentDay(1)}}><Box day = {1} trigger = {day[0]}/></div>
      	    	<div onClick = {() => {setDay([false, true, false, false, false]); setCurrentDay(2)}}><Box day = {2} trigger = {day[1]}/></div>
      	    	<div onClick = {() => {setDay([false, false, true, false, false]); setCurrentDay(3)}}><Box day = {3} trigger = {day[2]}/></div>
      	    	<div onClick = {() => {setDay([false, false, false, true, false]); setCurrentDay(4)}}><Box day = {4} trigger = {day[3]}/></div>
      	    	<div onClick = {() => {setDay([false, false, false, false, true]); setCurrentDay(5)}}><Box day = {5} trigger = {day[4]}/></div>
      	    </div>
			<div className = "flex flex-col flex-nowrap items-center justify-between">
				{
					events[currentDay].map((event) => {
						// wrap EventBox component with Link from react router dom when required
						return <EventBox name = {event.name} time = {event.time}/>
					})
				}
			</div>
      	</div>
    )
}

export default Timeline