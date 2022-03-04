import { Link } from "react-router-dom";

const Navbarlink = ({ title, route }) => {
  return (
    <Link
      to={route}
      className="relative hover:after:scale-x-100 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform"
    >
      {title}
    </Link>
  );
};

export default Navbarlink;
