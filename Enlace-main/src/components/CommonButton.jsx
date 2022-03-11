const commonButton = ({ content, link }) => {
  return (
    <a
      href={link}
      className="inline-block rounded-xl bg-[#FFF6D8]/90  px-12 py-3 border-[3px] border-[#FF3D3D] font-semibold text-xl font-poppins"
    >
      {content}
    </a>
  );
};
commonButton.defaultProps = {
  content: "Register!",
  link: "#",
};

export default commonButton;
