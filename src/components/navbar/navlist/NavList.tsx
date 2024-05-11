import { useContext } from "react";
import Typography from "../../shared/typography/Typography";
import { NavbarContext } from "../Navbar";
import styles from "./NavList.module.scss";

const NavList = () => {
  const { toggleOpen, status } = useContext(NavbarContext);

  return (
    <ul className={`${styles.list}  ${styles[status]}`}>
      <li>
        <a href="#dirs" onClick={() => toggleOpen("hide")}>
          {" "}
          <Typography variant="menu">ПРОГРАММЫ</Typography>
        </a>
      </li>
      <li>
        <a href="#cost" onClick={() => toggleOpen("hide")}>
          {" "}
          <Typography variant="menu">ПРАЙС</Typography>
        </a>
      </li>
      <li>
        <a href="#schedule" onClick={() => toggleOpen("hide")}>
          <Typography variant="menu">РАСПИСАНИЕ</Typography>
        </a>
      </li>
      <li>
        <a href="#" onClick={() => toggleOpen("hide")}>
          <Typography variant="menu">ОТЗЫВЫ</Typography>
        </a>
      </li>
      <li>
        <a href="#" onClick={() => toggleOpen("hide")}>
          <Typography variant="menu">КОНТАКТЫ</Typography>
        </a>
      </li>
    </ul>
  );
};

export default NavList;
