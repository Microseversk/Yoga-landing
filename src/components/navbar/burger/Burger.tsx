import { useContext } from "react";
import { NavbarContext } from "../../navbar/Navbar.tsx";
import styles from "./Burger.module.scss";

const Burger = () => {
  const { toggleOpen } = useContext(NavbarContext);

  return (
    <div onClick={toggleOpen} className={`${styles.burger}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Burger;
