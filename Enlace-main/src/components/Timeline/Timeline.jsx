import { useState, useEffect } from "react";
import { events } from "../../data/timelineData";
import Box from "../Boxes/Box.jsx";
import EventBox from "../Boxes/EventBox";
import DescBox from "../Boxes/DescBox";

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
      	<div className = "flex flex-row flex-nowrap w-full items-center justify-between">
      	    <div className = "flex flex-col flex-nowrap items-center justify-between w-1/8">
      	    	<div onClick = {() => {setCurrentDay(1)}}><Box day = {1} trigger = {currentDay === 1 ? true : false}/></div>
      	    	<div onClick = {() => {setCurrentDay(2)}}><Box day = {2} trigger = {currentDay === 2 ? true : false}/></div>
      	    	<div onClick = {() => {setCurrentDay(3)}}><Box day = {3} trigger = {currentDay === 3 ? true : false}/></div>
      	    	<div onClick = {() => {setCurrentDay(4)}}><Box day = {4} trigger = {currentDay === 4 ? true : false}/></div>
      	    	<div onClick = {() => {setCurrentDay(5)}}><Box day = {5} trigger = {currentDay === 5 ? true : false}/></div>
      	    </div>
			<div className = "flex flex-col flex-nowrap justify-between w-3/8 ml-5">
				{
					events[currentDay].map((event) => {
						// wrap EventBox component with Link from react router dom when required
						return <EventBox name = {event.name} time = {event.time}/>
					})
				}
			</div>
			<div className = "flex flex-col flex-nowrap w-1/2 ml-20 h-full">
				<DescBox day = {currentDay}/>
			</div>
      	</div>
    )
}

export default Timeline
