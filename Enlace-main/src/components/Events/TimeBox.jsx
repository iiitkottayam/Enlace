const TimeBox = ({ date, time }) => {
  return (
    <div className="font-reemkufi text-white ml-8 py-4 lg:py-16">
      <p className="text-xl md:text-3xl">{date}</p>
      <p className="inline text-base md:text-2xl border-b-[4px] pb-4  border-[#BFFF71]/90 ">
        {time}
      </p>
      <br />
      <br />
    </div>
  );
};

TimeBox.defaultProps = {
  date: "March 25th, 2022",
  time: "4:00 PM",
};

export default TimeBox;
