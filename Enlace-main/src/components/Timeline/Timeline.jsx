import { useState, useEffect } from "react";
import { events } from "./timelineData";
import Box from "../Boxes/Box.jsx";
import EventBox from "../Boxes/EventBox";

const Timeline = () => {

	const [currentDay, setCurrentDay] = useState(1);

	useEffect(() => {
		const date = new Date().getDate();
		
		switch(date){
			case 22:
				setCurrentDay(2);
				break;
			case 23:
				setCurrentDay(3);
				break;
			case 24:
				setCurrentDay(4);
				break;	
			case 25:
				setCurrentDay(5);
				break;		
			default:
				setCurrentDay(1);
				break;
		}
	}, []);

    return (
      	<div className = "flex flex-row flex-nowrap w-full items-center justify-evenly">
      	    <div className = "h-5/6 flex flex-col flex-nowrap items-center">
      	    	<div onClick = {() => {setCurrentDay(1)}}><Box day = {1} trigger = {currentDay === 1 ? true : false}/></div>
      	    	<div onClick = {() => {setCurrentDay(2)}}><Box day = {2} trigger = {currentDay === 2 ? true : false}/></div>
      	    	<div onClick = {() => {setCurrentDay(3)}}><Box day = {3} trigger = {currentDay === 3 ? true : false}/></div>
      	    	<div onClick = {() => {setCurrentDay(4)}}><Box day = {4} trigger = {currentDay === 4 ? true : false}/></div>
      	    	<div onClick = {() => {setCurrentDay(5)}}><Box day = {5} trigger = {currentDay === 5 ? true : false}/></div>
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
