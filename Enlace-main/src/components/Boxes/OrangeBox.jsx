import CommonButton from "../CommonButton"

const orangeBox = ({ text, buttonContent }) => {
    return (
        <div className="flex flex-col justify-between items-center w-4/6 mx-auto py-8 space-y-6 rounded from-[#FFD4AC]/80 to-[#F0616D]/80 bg-gradient-to-r">
            <p className="text-2xl font-medium">{text}</p>
            <CommonButton content={buttonContent} />
        </div>
    )
}

orangeBox.defaultProps = {
    text: "Have more queries?",
    buttonContent: "Ask us"
};


export default orangeBox;