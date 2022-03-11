import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TeamBox from "../Boxes/TeamBox.jsx";
import TeamBoxSm from "../Boxes/TeamBoxSm.jsx";

const Teams = () => {
    return (
        <div className="bg-black lg:bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
			<div className="h-screen w-screen bg-competitions-bg relative flex flex-col">
                <div className = "relative h-1/6">
                    <Nav />
                </div>
                <div className = "text-white h-5/6 text-center">
                    <div id = "desktop" className = "hidden lg:block h-full flex flex-col">
                        <TeamBox />
                    </div>
                    <div id = "mobile" className = "lg:hidden h-full">
                        <TeamBoxSm />
                    </div>
                </div>
			</div>
            <Footer />
		</div>
    )
}

export default Teams