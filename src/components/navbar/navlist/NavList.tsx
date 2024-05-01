import { useContext } from "react";
import { NavbarContext } from "../Navbar";
import styles from "./NavList.module.scss";

const NavList = () => {
  const { isOpen } = useContext(NavbarContext);

  return (
    <ul className={`${styles.list} ${isOpen ? styles.active : styles.hide}`}>
      <li>
        <a href="#"> ПРОГРАММЫ</a>
      </li>
      <li>
        <a href="#"> ПРАЙС</a>
      </li>
      <li>
        <a href="#">РАСПИСАНИЕ</a>
      </li>
      <li>
        <a href="#">ОТЗЫВЫ</a>
      </li>
      <li>
        <a href="#">КОНТАКТЫ</a>
      </li>
    </ul>
  );
};

export default NavList;
