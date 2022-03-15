import { HashLink as Link } from "react-router-hash-link";
import { submissionEvents } from "../../data/timelineData";
import SubmissionEventsBox from "./SubmissionEventsBox";

const DescBox = () => {

  return (
    <>
      <div className="text-center font-reemkufi text-white">
        <h1 className="lg:text-2xl xl:text-5xl my-5">Submission Events</h1>
      </div>        
      <div className="h-full flex flex-col items-center justify-center xl:text-1.5xl font-semibold font-reemkufi w-full">
          <SubmissionEventsBox name = {submissionEvents[0].name} link = {submissionEvents[0].link} info = {submissionEvents[0].info}/>
          <div className = "grid grid-cols-2 gap-x-5">
            <SubmissionEventsBox name = {submissionEvents[1].name} link = {submissionEvents[1].link} info = {submissionEvents[1].info}/>
            <SubmissionEventsBox name = {submissionEvents[2].name} link = {submissionEvents[2].link} info = {submissionEvents[2].info}/>
            <SubmissionEventsBox name = {submissionEvents[3].name} link = {submissionEvents[3].link} info = {submissionEvents[3].info}/>
            <SubmissionEventsBox name = {submissionEvents[4].name} link = {submissionEvents[4].link} info = {submissionEvents[4].info}/>
            <SubmissionEventsBox name = {submissionEvents[5].name} link = {submissionEvents[5].link} info = {submissionEvents[5].info}/>
            <SubmissionEventsBox name = {submissionEvents[6].name} link = {submissionEvents[6].link} info = {submissionEvents[6].info}/>
          </div>
      </div>
    </>
  );
};

export default DescBox;
