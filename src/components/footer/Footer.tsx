import { FC } from "react";
import styles from "./Footer.module.css";

interface FooterProps {
    copyText: string;
    author?: string;
  }

const Footer: FC<FooterProps> = ({ copyText, author }) => (
  <footer className={styles.container}>
    <h5 className={styles.copyText}>{copyText}</h5>
    {author && <small>created by {author}</small>}
  </footer>
);

export default Footer;
