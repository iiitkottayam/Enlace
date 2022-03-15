import styles from "./vertical.module.css";
import Nav from "../Navbar.jsx";
import CommonButton from "../CommonButton.jsx";
import OrangeBox from "../Boxes/OrangeBox.jsx";
import EventBoxSm from "../Boxes/EventBoxSm";
import Goldbox from "../Boxes/Goldbox.jsx";
import Silverbox from "../Boxes/Silverbox.jsx";
import FAQbox from "../Boxes/FAQbox.jsx";
import Footer from "../Footer.jsx";
import { events } from "../../data/timelineData";

const urls = [
  "https://res.cloudinary.com/roshin/image/upload/v1647279783/Past/past-1_b8bqaj.png",
  "https://res.cloudinary.com/roshin/image/upload/v1647279783/Past/past-2_eduap9.png",
  "https://res.cloudinary.com/roshin/image/upload/v1647279783/Past/past-3_vf0ncc.png",
  "https://res.cloudinary.com/roshin/image/upload/v1647279783/Past/past-4_szdmjn.png",
  "https://res.cloudinary.com/roshin/image/upload/v1647279783/Past/past-5_gxwuue.png",
  "https://res.cloudinary.com/roshin/image/upload/v1647279783/Past/past-6_wt54zw.png",
  "https://res.cloudinary.com/roshin/image/upload/v1647279784/Past/past-7_okabbt.png",
  "https://res.cloudinary.com/roshin/image/upload/v1647279784/Past/past-8_n40rqp.png",
  "https://res.cloudinary.com/roshin/image/upload/v1647279801/Assets_Enlace/dates_qjwjqc.png"
];

const Vertical = () => {
  const startDate = 21;
  const postfix = (date) => {
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <div className={styles.VerticalWrapper + " vertical"}>
      <Nav />
      <div className={styles.page}>
        <div className="w-11/12 h-4/6 mx-auto flex flex-col flex-nowrap justify-around text-center items-center pt-48 lg:pt-32 lg:items-start lg:text-left">
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
              has been celebrating arts, heritage, music and lifestyle since its
              inception in 2019. A myriad of events with impressive and
              breathtaking performances has always been the norm.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className="lg:hidden w-10/12 mx-auto text-white text-1xl py-2 pt-8 text-center pb-36 font-poppins">
          <p className="pb-0 lg:pb-16">
              It's the amalgamation of mind gruelling competitions, thought
              provoking expert talks and workshops that stimulate your cerebral
              matter!
          </p>
        </div>

        <div className="flex flex-col flex-start justify-center items-center text-center w-full pb-16">
          <img
            src={urls[8]}
            alt="dates"
            className="pb-28 lg:pb-40 w-8/12 lg:w-2/5 ml-2 -mt-20"
          />
          <a href="/#SOMEBODY FILL THIS WITH THE REGISTER LINK">
            <p className="text-1xl lg:text-2xl text-white pb-20 mx-auto text-center w-9/12 font-poppins">
            <span className="text-[#F48614] lg:text-[#FFD74B]">Register </span>
            now and come join us in this wild journey!
            </p>
          </a>
        </div>

        <div className="hidden lg:block mx-auto w-10/12 font-reemkufi">
          <p className="text-6xl text-opacity-70 text-white font-medium pt-2">
            Into the wild
          </p>
          <p className="text-7xl text-opacity-50 text-white font-semibold pt-4">
            Into the wild
          </p>
          <p className="text-9xl text-opacity-30 text-white font-bold pt-6">
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
          <img src={urls[0]} alt="album" className="pt-16 mx-auto" />
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
              src={urls[0]}
              alt="album"
              className="pl-24 "
            />
            <img
              data-aos="flip-up"
              data-aos-duration="1200"
              src={urls[7]}
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
              src={urls[5]}
              alt="album"
              className="pl-36 pt-16"
            />

            <div
              data-aos="zoom-in-up"
              data-aos-duration="750"
              className="inline-block  ml-64  from-[#FFD4AC]/30 via-[#F0616D]/30 to-[#FFD4AC]/30 bg-gradient-to-br h-96 w-2/6 rounded-2xl items-center"
            >
              <p className="text-white text-2xl py-8 px-6 font-poppins font-light">
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
          <img src={urls[7]} alt="album" className="mx-auto pt-12" />
          <p className="text-xl text-white w-10/12 mx-auto text-center pt-12 font-poppins font-light">
            Keeping the torch alight, IIIT Kottayam brings to you Enlace 2022:
            Into the wild, a fest to mirror the beautiful chaos of nature and
            keep you on your toes, stir your souls and spark your creative
            flair.{" "}
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="w-full h-3/6 mx-auto flex  flex-row  flex-wrap pt-12 px-4 ">
            <img
              data-aos="fade-right"
              data-aos-duration="1200"
              src={urls[4]}
              alt="album"
              className="p-12 basis-2/6"
            />
            <img
              data-aos="flip-right"
              data-aos-duration="1200"
              src={urls[2]}
              alt="album"
              className="p-16 basis-1/6"
            />
            <div
              data-aos="zoom-in-up"
              data-aos-duration="750"
              className="inline-block ml-28   basis-2/6  from-[#FFD4AC]/30 via-[#F0616D]/30 to-[#FFD4AC]/30 bg-gradient-to-br h-96 w-2/6 rounded-2xl items-center"
            >
              <p className="text-white text-2xl py-8 px-6 font-poppins font-light">
                Keeping the torch alight, IIIT Kottayam brings to you Enlace
                2022: Into the wild, a fest to mirror the beautiful chaos of
                nature and keep you on your toes, stir your souls and spark your
                creative flair.
              </p>
            </div>
          </div>
          <div className="w-full h-2/6 mx-auto flex  flex-row  flex-wrap py-12 px-4 ">
            <img
              data-aos="fade-up-right"
              data-aos-duration="1200"
              src={urls[1]}
              alt="album"
              className="pl-16 pt-16"
            />
            <img
              data-aos="zoom-in-down"
              data-aos-duration="1200"
              src={urls[3]}
              alt="album"
              className="pl-36 pt-16"
            />
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className="lg:hidden">
          <div className="flex mx-auto w-10/12 flex-col flex-wrap text-center">
            {Object.entries(events).map((event, index) => {
              return event[1].map((e, i) => {
                return (
                  <>
                    {i === 0 ? (
                      <p className="text-white font-semibold font-reemkufi text-4xl py-7">
                        Day {index + 1}
                      </p>
                    ) : (
                      ""
                    )}
                    {i === 0 ? (
                      <p
                        className="text-white font-semibold font-reemkufi text-3xl pb-3"
                        style={{ marginTop: "-1rem" }}
                      >
                        {startDate + index}
                        {postfix(startDate + index)} March
                      </p>
                    ) : (
                      ""
                    )}
                    <EventBoxSm name={e.name} time={e.time} />
                  </>
                );
              });
            })}
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
            <Goldbox />
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className="lg:hidden">
          <div className="mx-auto w-4/6 text-center text-white space-y-4 text-4xl font-reemkufi">
            <p className=" font-semibold text-2xl py-4">Silver Sponsors</p>
          </div>
          <div className="mx-auto text-center text-white flex  justify-center item-center">
            <Silverbox />
          </div>
          <div className=" flex flex-col items-center justify-center mx-auto w-full text-center text-white pt-24 space-y-2 text-3xl">
            <p id="mobilefaq" className="text-6xl font-reemkufi pb-5">
              FAQ
            </p>
            <FAQbox />
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className="lg:hidden">
          <div className=" flex flex-col items-center justify-center mx-auto w-full text-center text-white pt-10 space-y-10 text-3xl">
            <FAQbox />
            <FAQbox />
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div id="mobilecontactus" className="lg:hidden">
          <div className="mx-auto space-y-8 flex flex-col justify-between items-center ">
            <OrangeBox buttonContent={"Ask Us"} text={"Have any query ?"} link={"https://docs.google.com/forms/d/e/1FAIpQLScH6prke7fPTi7ysQPfsarxe6iK2FbJg-6ZKR3-zNf912bVMw/viewform"} />
            <OrangeBox buttonContent={"Sponsor Us"} text={"Want to become a sponsor"} link={"https://forms.gle/ZBB5ZvZytwxsmc1EA"} />
            <CommonButton />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vertical;
