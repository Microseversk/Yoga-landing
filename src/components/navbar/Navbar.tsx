import { createContext, useState } from "react";
import styles from "./Navbar.module.scss";
import Burger from "./burger/Burger";
import Logo from "./logo/Logo";
import NavList from "./navlist/NavList";
import Phone from "./phone/Phone";

export const NavbarContext = createContext({
  isOpen: false,
  toggleOpen: () => {}, // Пустая функция по умолчанию
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContext.Provider value={{ isOpen, toggleOpen }}>
      <header className={styles.header}>
        <Logo />
        <NavList />
        <div
          style={{ display: "flex", columnGap: "35px", alignItems: "center" }}
        >
          <Phone />
          <Burger />
        </div>
      </header>
    </NavbarContext.Provider>
  );
};

export default Navbar;
