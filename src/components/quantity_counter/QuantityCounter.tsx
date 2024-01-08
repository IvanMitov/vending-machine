import { FC, memo } from "react";
import StatsRow from "../stats_row/StatsRow";
import styles from "./QuantityCounter.module.css";


interface QuantityCounterProps {
    quantity: number;
    onCountActionClick: (increment: boolean) => void;
}

const QuantityCounter: FC<QuantityCounterProps> = ({
  quantity,
  onCountActionClick
}) => (
  <div className={styles.container}>
    <StatsRow text="Quantity" value={quantity} />
    <button onClick={() => onCountActionClick(true)}>&#43;</button>
    <button onClick={() => onCountActionClick(false)}>&#8722;</button>
  </div>
);

export default memo(QuantityCounter);
