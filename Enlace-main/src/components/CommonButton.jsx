const commonButton = ({ content, link }) => {
  return (
    <a
      href={link}
      className="hover:shadow-[0_3px_5px_0px_rgba(0,0,0,0.7)] inline-block rounded-xl bg-[#FFF6D8]/90  px-12 py-3 border-[3px] border-[#FF3D3D] font-semibold text-xl font-poppins shadow-[0_8px_10px_0px_rgba(0,0,0,0.7)]"
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
