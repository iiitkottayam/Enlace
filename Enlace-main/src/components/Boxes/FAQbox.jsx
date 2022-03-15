const FAQbox = ({ question, answer }) => {
  return (
    <div className="p-0.5 lg:w-96 lg:h-40 w-10/12 bg-gradient-to-r from-gradient-start/60 to-gradient-stop/60 rounded-2xl box-border">
      <div className="p-4 py-6 lg:p-5 w-full h-full bg-white/60 rounded-2xl font-poppins flex flex-col items-left justify-evenly">
        <p className="text-xl lg:text-xl text-black font-semibold">
          {question}
        </p>
        <p className="text-lg lg:text-sm text-black">{answer}</p>
      </div>
    </div>
  );
};

FAQbox.defaultProps = {
  question: "Am I eligible for the events?",
  answer:
    "As long as you are currently enrolled in an Undergraduate degree program, you can participate in any event.",
};

export default FAQbox;
