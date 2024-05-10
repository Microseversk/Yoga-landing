import { useContext } from "react";
import { NavbarContext } from "../Navbar";
import styles from "./NavList.module.scss";

const NavList = () => {
  const { toggleOpen, status } = useContext(NavbarContext);

  return (
    <ul className={`${styles.list}  ${styles[status]}`}>
      <li>
        <a href="#dirs" onClick={() => toggleOpen("hide")}>
          {" "}
          ПРОГРАММЫ
        </a>
      </li>
      <li>
        <a href="#cost" onClick={() => toggleOpen("hide")}>
          {" "}
          ПРАЙС
        </a>
      </li>
      <li>
        <a href="#" onClick={() => toggleOpen("hide")}>
          РАСПИСАНИЕ
        </a>
      </li>
      <li>
        <a href="#" onClick={() => toggleOpen("hide")}>
          ОТЗЫВЫ
        </a>
      </li>
      <li>
        <a href="#" onClick={() => toggleOpen("hide")}>
          КОНТАКТЫ
        </a>
      </li>
    </ul>
  );
};

export default NavList;
