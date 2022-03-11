import Nav from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TeamBox from "../Boxes/TeamBox.jsx";
import TeamBoxSm from "../Boxes/TeamBoxSm.jsx";

const Teams = () => {
    return (
        <div className="bg-black xl:bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
			<div className="h-screen w-screen bg-competitions-bg relative flex flex-col justify-center">
                <div className = "relative h-1/6">
                    <Nav />
                </div>
                <div className = "text-white h-4/6 text-center">
                    <div id = "desktop" className = "hidden xl:block h-full flex flex-col">
                        <TeamBox />
                    </div>
                    <div id = "mobile" className = "xl:hidden h-full">
                        <TeamBoxSm />
                    </div>
                </div>
                <div className = "h-1/6">
                    <Footer />
                </div>
			</div>
		</div>
    )
}

export default Teams