import styles from "./vertical.module.css";
import Nav from "../Navbar.jsx";
import dates from "../../assets/dates.png";
import CommonButton from "../CommonButton.jsx";
import OrangeBox from "../Boxes/OrangeBox.jsx";
import past1 from "../../assets/past/past-1.png";
import past2 from "../../assets/past/past-2.png";
import past3 from "../../assets/past/past-3.png";
import past4 from "../../assets/past/past-4.png";
import past5 from "../../assets/past/past-5.png";
import past6 from "../../assets/past/past-6.png";
import past7 from "../../assets/past/past-7.png";
import past8 from "../../assets/past/past-8.png";
import EventBoxSm from "../Boxes/EventBoxSm";
import Emeraldbox from "../Boxes/Emeraldbox.jsx";
import FAQbox from "../Boxes/FAQbox.jsx";
import Footer from "../Footer.jsx";

const Vertical = () => {
  return (
    <div className={styles.VerticalWrapper + " vertical"}>
      <Nav />
      <div className={styles.page}>
        <div className="w-11/12 h-4/6 mx-auto flex flex-col flex-nowrap justify-around text-center items-center pt-48 lg:pt-32 lg:items-start lg:text-left md:text-left md:h-3/6 md:pt-16 md:items-start">
          <h2 className="text-4xl text-white lg:text-5xl font-reemkufi">
            Welcome to Enlace!
          </h2>
          <p className="w-9/12  pb-60 pt-12 lg:w-6/12 text-white text-1xl lg:text-3xl lg:pt-10 lg:pb-14 font-poppins font-light">
            a fest to mirror the beautiful chaos of nature and keep you on your
            toes, stir your souls and spark your creative flair.{" "}
          </p>

          <CommonButton />
        </div>
      </div>
      <div className={styles.page}>
        <div className="mx-auto w-11/12 h-full text-center flex flex-col flex-nowrap justify-center  items-center pt-60 lg:pt-48  lg:items-start lg:text-left md:text-left md:h-4/6 md:items-start">
          <h2 className="text-4xl text-white pb-8 lg:text-5xl lg:pb-0 pt-16 font-reemkufi">
            <span className="text-[#F48614] lg:text-[#FFD74B]">Enlace</span>,
            IIITK's cultural fest
          </h2>
          <div className="font-poppins font-light">
            <p className="w-11/12  lg:w-6/12 text-white text-1xl lg:text-2xl pt-16 pb-4 lg:pt-8 hidden  lg:block md:block">
              has been celebrating arts, heritage, music and lifestyle since its
              inception in 2019. A myriad of events with impressive and
              breathtaking performances has always been the norm.
            </p>
            <p className="w-11/12  lg:w-6/12 text-white text-1xl lg:text-2xl py-4 hidden lg:block md:block">
              It's the amalgamation of mind gruelling competitions, thought
              provoking expert talks and workshops that stimulate your cerebral
              matter!
            </p>
            <p className="w-11/12 lg:w-6/12 text-white text-1xl lg:text-2xl py-8 mx-auto lg:hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. it
              aperiam suscipit accusamus quos corporis,Lorem ipsum dolor sit
              amet consectetur adipisicing elit. it aperiam suscipit accusamus
              quos corporis,{" "}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className="lg:hidden w-10/12 mx-auto text-white text-1xl py-2 pt-8 text-center pb-36 font-poppins">
          <p className="pb-0 lg:pb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.aperiam
            suscipit accusamus quos corporis,Lorem ipsum dolor sit amet
            consectetur adipisicing elit. it aperiam suscipit accusamus quos
            corporis, it aperiam suscipit accusamus quos corporis,
          </p>
        </div>

        <div className="flex flex-col flex-start justify-center items-center text-center w-full pb-16">
          <img
            src={dates}
            alt="dates"
            className="pb-28 lg:pb-40 w-8/12 lg:w-2/5 ml-2 -mt-20"
          />
          <p className="text-1xl lg:text-2xl text-white pb-20 mx-auto text-center w-9/12 font-poppins">
            <span className="text-[#F48614] lg:text-[#FFD74B]">Register </span>
            now and come join us in this wild journey!
          </p>
          <CommonButton />
        </div>

        <div className="hidden lg:block mx-auto w-10/12 font-reemkufi">
          <p className="text-5xl text-opacity-70 text-white font-medium pt-2">
            Into the wild
          </p>
          <p className="text-6xl text-opacity-50 text-white font-semibold pt-4">
            Into the wild
          </p>
          <p className="text-8xl text-opacity-30 text-white font-bold pt-6">
            Into the wild
          </p>
          <p className="text-9xl text-opacity-20 text-white font-black pt-8">
            Into the wild
          </p>
        </div>
      </div>

      <div className={styles.page}>
        <div id="mobilewhoweare" className="lg:hidden pt-16">
          <h1 className="text-center text-white text-5xl font-reemkufi">
            Who We Are
          </h1>
        </div>
        <div className="lg:hidden">
          <img src={past1} alt="album" className="pt-16 mx-auto" />
          <p className="text-xl text-white w-10/12 mx-auto text-center pt-12 font-poppins font-light">
            Enlace, IIIT Kottayam's cultural fest, has been celebrating arts,
            heritage, music and lifestyle since its inception in 2019. We bring
            a myriad of events to life with impressive and breathtaking
            performances.{" "}
          </p>
        </div>

        <div id="whoweare" className="hidden lg:block">
          <div className="w-full h-2/6 mx-auto flex  flex-row  flex-wrap pt-28 px-4 ">
            <img
              data-aos="fade-down-right"
              data-aos-duration="1200"
              src={past1}
              alt="album"
              className="pl-24 "
            />
            <img
              data-aos="flip-up"
              data-aos-duration="1200"
              src={past8}
              alt="album"
              className="pl-24 "
            />
            <div
              data-aos="zoom-in-up"
              data-aos-duration="750"
              className="inline-block mt-24 ml-28  from-[#FFD4AC]/30 via-[#F0616D]/30 to-[#FFD4AC]/30 bg-gradient-to-br h-24 w-94 rounded-2xl items-center"
            >
              <p className="text-white text-5xl py-5 px-16 font-reemkufi">
                Who We Are
              </p>
            </div>
          </div>
          <div className="w-full h-3/6 mx-auto flex  flex-row  flex-wrap pt-12 px-4 ">
            <img
              data-aos="zoom-out"
              data-aos-duration="1200"
              src={past6}
              alt="album"
              className="pl-36 pt-16"
            />

            <div
              data-aos="zoom-in-up"
              data-aos-duration="750"
              className="inline-block  ml-64  from-[#FFD4AC]/30 via-[#F0616D]/30 to-[#FFD4AC]/30 bg-gradient-to-br h-96 w-2/6 rounded-2xl items-center"
            >
              <p className="text-white text-3xl py-8 px-6 font-poppins font-light">
                Enlace, IIIT Kottayam's cultural fest, has been celebrating
                arts, heritage, music and lifestyle since its inception in 2019.
                We bring a myriad of events to life with impressive and
                breathtaking performances.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className="lg:hidden">
          <img src={past8} alt="album" className="mx-auto pt-12" />
          <p className="text-xl text-white w-10/12 mx-auto text-center pt-12 font-poppins font-light">
            Enlace, IIIT Kottayam's cultural fest, has been celebrating arts,
            heritage, music and lifestyle since its inception in 2019. We bring
            a myriad of events to life with impressive and breathtaking
            performances.{" "}
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="w-full h-3/6 mx-auto flex  flex-row  flex-wrap pt-12 px-4 ">
            <img
              data-aos="fade-right"
              data-aos-duration="1200"
              src={past5}
              alt="album"
              className="p-12 basis-2/6"
            />
            <img
              data-aos="flip-right"
              data-aos-duration="1200"
              src={past3}
              alt="album"
              className="p-16 basis-1/6"
            />
            <div
              data-aos="zoom-in-up"
              data-aos-duration="750"
              className="inline-block ml-28   basis-2/6  from-[#FFD4AC]/30 via-[#F0616D]/30 to-[#FFD4AC]/30 bg-gradient-to-br h-96 w-2/6 rounded-2xl items-center"
            >
              <p className="text-white text-3xl py-8 px-6 font-poppins font-light">
                Keeping the torch alight, IIIT Kottayam brings to you Enlace
                2022: Into the wild, a fest to mirror the beautiful chaos of
                nature and keep you on your toes, stir your souls and spark your
                creative flair.
              </p>
            </div>
          </div>
          <div className="w-full h-2/6 mx-auto flex  flex-row  flex-wrap pt-12 px-4 ">
            <img
              data-aos="fade-up-right"
              data-aos-duration="1200"
              src={past2}
              alt="album"
              className="pl-16 pt-16"
            />
            <img
              data-aos="zoom-in-down"
              data-aos-duration="1200"
              src={past4}
              alt="album"
              className="pl-36 pt-16"
            />
            <img
              data-aos="fade-up"
              data-aos-duration="1200"
              src={past7}
              alt="album"
              className="pl-36 pt-16"
            />
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className="lg:hidden">
          <div className="flex mx-auto w-10/12 flex-col flex-wrap text-center">
            <p className="text-white font-semibold font-reemkufi text-4xl py-4">
              Day 1
            </p>
            <EventBoxSm />
            <EventBoxSm />
            <EventBoxSm />
            <EventBoxSm />
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className="lg:hidden">
          <div className="flex mx-auto w-10/12 flex-col flex-wrap pt-8 text-center">
            <p className="text-white font-semibold font-reemkufi text-4xl py-4">
              Day 2
            </p>
            <EventBoxSm />
            <EventBoxSm />
            <EventBoxSm />
            <EventBoxSm />
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className="lg:hidden">
          <div className="mx-auto w-4/6 text-center text-white py-8 space-y-4 text-4xl font-reemkufi">
            <p className="font-semibold ">Total prize of </p>
            <p className="font-semibold ">Rs. 55,000</p>
            <p className="font-regular text-[#ffffffc0]">
              + exiciting gifts from
            </p>
            <p id="mobilesponsors" className="py-6 font-bold text-4xl">
              Our Sponsors
            </p>
            <p className=" font-semibold text-2xl pt-10">Gold Sponsors</p>
          </div>
          <div className="mx-auto text-center text-white flex  justify-center item-center">
            <Emeraldbox />
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className="lg:hidden">
          <div className="mx-auto w-4/6 text-center text-white space-y-4 text-4xl font-reemkufi">
            <p className=" font-semibold text-2xl py-4">Silver Sponsors</p>
          </div>
          <div className="mx-auto text-center text-white flex  justify-center item-center">
            <Emeraldbox />
          </div>
          <div className=" flex flex-col items-center justify-center mx-auto w-full text-center text-white pt-24 space-y-4 text-3xl">
            <p id="mobilefaq" className="text-6xl font-reemkufi pb-16">
              FAQ
            </p>
            <FAQbox />
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className="lg:hidden">
          <div className=" flex flex-col items-center justify-center mx-auto w-full text-center text-white py-4 space-y-8 text-3xl">
            <FAQbox />
            <FAQbox />
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div id="mobilecontactus" className="lg:hidden">
          <div className="mx-auto space-y-8 pt-10 flex flex-col justify-center items-center ">
            <OrangeBox />
            <OrangeBox />
            <CommonButton />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vertical;
