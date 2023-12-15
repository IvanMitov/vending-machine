import { FC, PropsWithChildren, memo } from "react";
import styles from "./SectionWrapper.module.css";

interface SectionWrapperProps extends PropsWithChildren {
    title: string;
    appendDivider?: boolean;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ title, appendDivider, children }) => (
  <section className={`${styles.container} ${appendDivider ? "bb" : ""}`}>
    <h4 className="m0">{title}</h4>
    {children}
  </section>
);

export default memo(SectionWrapper);
