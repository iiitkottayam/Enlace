const FAQbox = ({ question, answer }) => {
  return (
    <div className="m-5 p-0.5 lg:w-96 lg:h-40 bg-gradient-to-r from-gradient-start/60 to-gradient-stop/60 rounded box-border">
      <div className="p-5 w-full h-full bg-white/60 rounded">
        <p className="mb-2 font-poppins font-medium lg:text-xl text-black">
          {question}
        </p>
        <p className="font-poppins lg:text-sm text-black">{answer}</p>
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
