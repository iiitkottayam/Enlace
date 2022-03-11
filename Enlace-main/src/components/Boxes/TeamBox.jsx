

const TeamBox = () => {
    return (
        <>
            <div className = "h-1/6 font-semibold text-5xl m-0">
                Team
            </div>
            <div className = "h-5/6 flex justify-center">
                <div className = "h-full w-1/3 flex justify-center items-center">
                    <div className = "bg-white/40 h-5/6 w-2/3 rounded-xl flex flex-col justify-evenly items-center text-2xl">
                        <div className = "option cursor-pointer active:text-[#A9FF40d6]">Core Team</div>
                        <div className = "option cursor-pointer">Event Managers</div>
                        <div className = "option cursor-pointer">Sponsorship</div>
                        <div className = "option cursor-pointer">Designing</div>
                        <div className = "option cursor-pointer">Web Dev</div>
                    </div>
                </div>
                <div className = "h-full w-2/3">

                </div>
            </div>
        </>
      
    )
}

export default TeamBox
