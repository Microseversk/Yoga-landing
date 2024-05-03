import { createContext, useState } from "react";
import styles from "./Navbar.module.scss";
import Burger from "./burger/Burger";
import Logo from "./logo/Logo";
import NavList from "./navlist/NavList";
import Phone from "./phone/Phone";

export const NavbarContext = createContext({
  status: "",
  toggleOpen: (_newStatus: string) => {}, // Пустая функция по умолчанию
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState("");

  const toggleOpen = (newStatus: string) => {
    setIsOpen(newStatus);
  };

  return (
    <NavbarContext.Provider value={{ status: isOpen, toggleOpen }}>
      <header className={styles.header}>
        <Logo />
        <NavList />
        <div className={styles.headerRightSide}>
          <Phone />
          <Burger />
        </div>
      </header>
    </NavbarContext.Provider>
  );
};

export default Navbar;
