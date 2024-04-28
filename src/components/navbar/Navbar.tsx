import styles from "./Navbar.module.scss";
import Logo from "./logo/Logo";
import NavList from "./navlist/NavList";
import Phone from "./phone/Phone";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavList />
      <Phone />
    </header>
  );
};

export default Navbar;
