import styles from "./NavList.module.scss";

const NavList = () => {
  return (
    <ul className={styles.list}>
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
