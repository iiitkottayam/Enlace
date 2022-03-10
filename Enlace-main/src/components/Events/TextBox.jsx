const TestBox = ({ heading, content }) => {
  return (
    <div className="px-4">
      <ul>
        <li className="border-l-[6px]  border-[#FF7979]/90 ">
          <p>.</p>
          <h1 className="text-white font-reemkufi font-medium text-3xl m-4 lg:text-6xl lg:m-2">
            {heading}
          </h1>
          <p>.</p>
        </li>
        <p className="text-white font-poppins font-medium text-2xl lg:text-3xl m-4">
          {content}
        </p>
      </ul>
    </div>
  );
};

TestBox.defaultProps = {
  heading: "Big Heading",
  content:
    "tinry text.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Consectetur saepe quas aliquam dolorem illo beatae dicta, tempore esse culpa veritatis ratione corporis voluptatem cumque eos at sequi ea? ",
};

export default TestBox;
