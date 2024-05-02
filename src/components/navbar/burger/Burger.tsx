import { useContext } from "react";
import { NavbarContext } from "../../navbar/Navbar.tsx";
import styles from "./Burger.module.scss";

const Burger = () => {
  const { toggleOpen, status } = useContext(NavbarContext);

  return (
    <div
      onClick={() => {
        if (status === "") {
          toggleOpen("active");
        } else if (status === "active") {
          toggleOpen("hide");
        } else if (status === "hide") {
          toggleOpen("active");
        }
      }}
      className={`${styles.burger}`}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Burger;
