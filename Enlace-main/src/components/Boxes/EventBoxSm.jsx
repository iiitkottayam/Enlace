const EventBox = ({ name, time }) => {

    const passive = "p-0.5  w-88 h-28  lg:w-96 lg:h-45 bg-gradient-to-r from-gradient-start/80 to-gradient-stop/80 rounded-xl box-border m-2 cursor-pointer";
    const active = "hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-stop"

    return (
        <div
            className={passive + active}
        // data-aos="zoom-in-down"
        // data-aos-duration="1000"
        >
            <div className="p-2 w-full h-full bg-box-fill/80 rounded-xl cursor-pointer flex flex-col items-center justify-center text-white hover:text-black hover:bg-box-fill/0">
                <h2 className="font-reemkufi lg:text-3xl text-center">{name}</h2>
                <h2 className="font-reemkufi lg:text-3xl text-center mt-5">{time}</h2>
            </div>
        </div>
    );
};

export default EventBox;


