import styles from "./vertical.module.css";
import Nav from "./Navbar.jsx";
import dates from "../assets/dates.png";
import RegisterButton from "./RegisterButton.jsx";
import past1 from "../assets/past/past-1.png";
import past2 from "../assets/past/past-2.png";
import past3 from "../assets/past/past-3.png";
import past4 from "../assets/past/past-4.png";
import past5 from "../assets/past/past-5.png";
import past6 from "../assets/past/past-6.png";
import past7 from "../assets/past/past-7.png";
import past8 from "../assets/past/past-8.png";
import logotitle from "../assets/Enlace-logo-name.png";

const Vertical = () => {
  return (
    <div className={styles.VerticalWrapper}>
      <Nav />
      {/* <Body /> */}
      <div className={styles.page}>
        <div className="w-11/12 h-4/6 mx-auto flex flex-col flex-nowrap justify-around items-center pt-16 lg:pt-32 lg:items-start  md:h-3/6 md:pt-16 md:items-start">
          <h2 className="text-4xl text-white lg:text-5xl">Welcome to Enlace!</h2>
          <p className="w-11/12 lg:w-6/12 text-white text-2xl py-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam fugit omnis pariatur porro, ipsum molestias velit aperiam suscipit accusamus quos corporis, reiciendis tempore dicta?</p>
          <RegisterButton />
        </div>
        
      </div>
      <div className={styles.page}>
        <div className="mx-auto w-11/12 h-full flex flex-col flex-nowrap justify-center items-center pt-48  lg:items-start md:h-4/6 md:items-start">
        <h2 className="text-4xl text-white lg:text-5xl pb-4 pt-24">Welcome to Enlace!</h2>
          <p className="w-11/12 lg:w-6/12 text-white text-2xl py-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam fugit omnis pariatur porro, ipsum molestias velit aperiam suscipit accusamus quos corporis, reiciendis tempore dicta?</p>
          <p className="w-11/12 lg:w-6/12 text-white text-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae, maxime minima debitis autem similique culpa corporis reiciendis?</p>
        </div>
      </div>
      <div className={styles.page}> 
      <div className="flex flex-col flex-start justify-center items-center  w-full">
        <img src={dates} alt="dates" className="pb-16" />
        </div>

        <div className="mx-auto w-11/12 pb-6">
        <p className="text-2xl text-white pb-16 ">Register now and come join us in this wild journey!</p>
        <RegisterButton />
        </div>

        <div className="mx-auto w-11/12 ">
          <p className="text-1xl text-white ">Into the wild</p>
          <p className="text-2xl text-white pt-2">Into the wild</p>
          <p className="text-3xl text-white pt-4">Into the wild</p>
          <p className="text-4xl text-white pt-6">Into the wild</p>
          <p className="text-5xl text-white pt-6">Into the wild</p>
          <p className="text-6xl text-white pt-8">Into the wild</p>
        </div>
      </div>
      
      {/* <div className={styles.page}>
        <div className="w-11/12 h-full mx-auto flex flex-col flex-nowrap justify-around items-start">
        
        <div>
          <p className="text-1xl text-white pt-2">Into the wild</p>
          <p className="text-2xl text-white pt-4">Into the wild</p>
          <p className="text-3xl text-white pt-8">Into the wild</p>
          <p className="text-4xl text-white pt-12">Into the wild</p>
          <p className="text-5xl text-white pt-16">Into the wild</p>
          <p className="text-6xl text-white pt-24">Into the wild</p>
        </div>
        </div>
    </div> */}
    <div className={styles.page}>
      <div className="w-full h-2/6 mx-auto flex  flex-row  flex-start flex-wrap  ">
        <img src={past1} alt="album" className="p-8" />
        <img src={past8} alt="album" className="p-8"/>
        <img src={logotitle} alt="logo-title" className="p-8"   />
        <div className=""><p className="text-white">About us</p></div>
      </div>
      <div>
        <img src={past3} alt="album" />
        <img src={past4} alt="album" />
        
      </div>
    </div>
    <div className={styles.page}>
      <div className="flex flex-wrap justify-center items-center h-full w-full">
        <img src={past5} alt="album" />
        <img src={past6} alt="album" />
        <img src={past7} alt="album" />
        <img src={past8} alt="album" />

      </div>
    </div>

    </div>
  );
};

export default Vertical;



