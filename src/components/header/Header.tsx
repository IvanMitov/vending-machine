import { FC } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => (
  <header className={styles.container}>
    <a href='/' title={title} className={styles.title}>{title}</a>
  </header>
);

export default Header;
