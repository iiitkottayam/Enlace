import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import styles from "./Example.module.css";
import TextBox from "./TestBox.jsx";
import Box from "./TimeBox.jsx";
import Orglist from "./OrgList.jsx";
import CommonButton from "../CommonButton"

const Example = ({ heading, content, image, org11, org12, org13, org21, org22, org23 }) => {
    return (
        <div className="h-full w-full bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
            <div className="h-full w-full bg-competitions-bg">
                <Nav />
                <div className="h-full w-full pt-36">
                    <div className=" w-11/12 flex flex-col lg:flex-row justify-center mx-auto ">
                        <TextBox heading={heading} content={content} />
                        <img
                            src={image}
                            alt="event poster"
                            className="lg:w-75 lg:h-75  mx-auto rounded-2xl mb-5"
                        ></img>
                        {/* add button */}
                    </div>
                    <div className="lg:px-20 ">
                        <TextBox />

                        <Box />

                        <TextBox className="pb-4" />

                        <Orglist org1={org11} org1det={org12} ph1={org13} org2={org21} org2det={org22} ph2={org23} />
                    </div>

                </div>
                <Footer />
            </div>
        </div>

    )
}

Example.defaultProps = {
    heading: "Big Heading",
    content: "tinry text.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Consectetur saepe quas aliquam dolorem illo beatae dicta, tempore esse culpa veritatis ratione corporis voluptatem cumque eos at sequi ea? ",
    image: "https://m.media-amazon.com/images/I/71+17bVYHxL._SX522_.jpg",
    org11: "abcde",
    org12: "sdafjk;lj@asdlfj.com",
    org13: "23144356246",
    org21: "fjaskdl",
    org22: "hjasflkd@casdhfjl.com",
    org23: "1354375367",

};


export default Example;