const EventBox = ({ name, time }) => {
  const passive =
    "p-0.5 lg:w-80 lg:h-30 bg-gradient-to-r from-gradient-start/80 to-gradient-stop/80 rounded-xl box-border m-2 cursor-pointer";
  const active =
    "hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-stop";

  return (
    <div
      className={passive + active}
      // data-aos="zoom-in-down"
      // data-aos-duration="1000"
    >
      <div className="lg:text-base xl:text-2xl font-semibold font-reemkufi text-center p-2 w-full h-full bg-box-fill/80 rounded-xl cursor-pointer flex flex-col items-center justify-center text-white hover:text-black hover:bg-box-fill/0">
        <h2>{name}</h2>
        <h2 className="mt-5">{time}</h2>
      </div>
    </div>
  );
};

export default EventBox;
