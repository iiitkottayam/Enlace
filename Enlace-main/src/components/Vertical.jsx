import styles from "./vertical.module.css";
import Nav from "./Navbar.jsx";
import dates from "../assets/dates.png";

const Vertical = () => {
  return (
    <div className={styles.VerticalWrapper}>
      <Nav />
      {/* <Body /> */}
      <div className={styles.page}>
        <div className="w-11/12 h-4/6 mx-auto flex flex-col flex-nowrap justify-around items-center pt-16 lg:pt-32 lg:items-start  md:h-3/6 md:pt-16 md:items-start">
          <h2 className="text-4xl text-white lg:text-5xl">Welcome to Enlace!</h2>
          <p className="w-11/12 lg:w-6/12 text-white text-2xl py-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam fugit omnis pariatur porro, ipsum molestias velit aperiam suscipit accusamus quos corporis, reiciendis tempore dicta?</p>
          <a href="#" className="inline-block rounded-lg bg-[#FFF6D8]/90  px-12 py-2 border-2 border-[#FF3D3D]">Register!</a>
        </div>
        
      </div>
      <div className={styles.page}>
        <div className="mx-auto w-11/12 h-full flex flex-col flex-nowrap justify-center items-center  lg:items-start md:h-4/6 md:items-start">
        <h2 className="text-4xl text-white lg:text-5xl pb-4">Welcome to Enlace!</h2>
          <p className="w-11/12 lg:w-6/12 text-white text-2xl py-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam fugit omnis pariatur porro, ipsum molestias velit aperiam suscipit accusamus quos corporis, reiciendis tempore dicta?</p>
          <p className="w-11/12 lg:w-6/12 text-white text-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae, maxime minima debitis autem similique culpa corporis reiciendis?</p>
        </div>
      </div>
      <div className={styles.page}> <div className="flex justify-center items-center h-full w-full"><img src={dates} alt="dates" /></div></div>
    </div>
  );
};

export default Vertical;
