import { useContext } from "react";
import { NavbarContext } from "../../navbar/Navbar.tsx";
import styles from "./Burger.module.scss";

const Burger = () => {
  const { toggleOpen, status } = useContext(NavbarContext);

  return (
    <div
      className={`${styles.burger}`}
      onClick={() => {
        if (status === "") {
          toggleOpen("active");
        } else if (status === "active") {
          toggleOpen("hide");
        } else if (status === "hide") {
          toggleOpen("active");
        }
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Burger;
