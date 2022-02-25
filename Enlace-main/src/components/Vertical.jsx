import styles from "./vertical.module.css";
import Nav from "./Navbar.jsx";
// import Body from "./body.jsx";

const Vertical = () => {
  return (
    <div className={styles.VerticalWrapper}>
      <Nav />
      {/* <Body /> */}
      <div className={styles.page}>
        <div className="mx-auto w-3/6 h-full flex flex-row flex-nowrap justify-around items-center">
        <h2>Welcome to Enlace</h2>
        </div>
      </div>
      <div className={styles.page}>Vertical - 2</div>
      <div className={styles.page}>Vertical - 3</div>
   
    </div>
  );
};

export default Vertical;
