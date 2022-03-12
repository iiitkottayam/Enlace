const Box = ({ day, trigger }) => {
  const passive =
    "p-0.5 lg:w-60 lg:h-15 bg-gradient-to-r from-gradient-start/80 to-gradient-stop/80 rounded-xl box-border m-2 cursor-pointer";
  const active =
    "p-0.5 lg:w-60 lg:h-15 bg-gradient-to-r from-gradient-start to-gradient-stop rounded-xl box-border m-2 cursor-pointer";

  return (
    <div
      className={trigger ? active : passive}
      // data-aos="zoom-in-down"
      // data-aos-duration="1000"
    >
      <div
        className={
          trigger
            ? "w-full h-full rounded-xl flex items-center justify-center text-black"
            : "w-full h-full rounded-xl flex items-center justify-center bg-box-fill/80 text-white"
        }
      >
        <h2 className="font-reemkufi lg:text-xl xl:text-3xl mt-1 mb-1">
          Day {day}
        </h2>
      </div>
    </div>
  );
};

export default Box;
