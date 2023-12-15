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
    <button onClick={() => onCountActionClick(true)}>+</button>
    <button onClick={() => onCountActionClick(false)}>-</button>
  </div>
);

export default memo(QuantityCounter);
