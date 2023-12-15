import { FC, memo } from "react";
import StatsRow from "../stats_row/StatsRow";
import styles from "./BalanceStats.module.css";

interface CreditsStatsProps {
    credits: number;
    onResetClick: VoidFunction;
}

const CreditsStats: FC<CreditsStatsProps> = ({
  credits,
  onResetClick
}) => (
  <div className={styles.container}>
    <StatsRow text="Money available" value={credits.toFixed(2)} />
    <button type='button' onClick={onResetClick}>Reset</button>
  </div>
);

export default memo(CreditsStats);
