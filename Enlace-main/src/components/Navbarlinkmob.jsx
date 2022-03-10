import { HashLink as Link } from "react-router-hash-link";

const Navbarlink = ({ title, route, navRef, iconRef, menuRef }) => {
  const closeMenu = () => {
    const nav = navRef.current;
    const icon = iconRef.current;
    const menu = menuRef.current;
    document.body.style.overflow = "scroll";
    nav.classList.add("absolute", "top-3", "rounded-full", "border-2");
    nav.classList.remove("fixed", "top-0", "h-[100vh]", "items-start");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
    menu.classList.add("hidden");
    menu.classList.remove("flex");
  };

  return (
    <Link
      onClick={closeMenu}
      smooth
      to={route}
      className="relative hover:after:scale-x-100 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform"
    >
      {title}
    </Link>
  );
};

export default Navbarlink;
