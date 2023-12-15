import { FC, memo } from "react";
import styles from "./Denomination.module.css";

export interface IDenomination {
    denomination: number,
    currencyId: string,
  }

interface DenominationProps {
    denominations?: IDenomination[];
    onCoinClick: (string: number) => void;
}

const Denomination: FC<DenominationProps> = ({
  denominations = [],
  onCoinClick
}) => (
  <div className={styles.container}>
    <div className={styles.coinsList}>
      {denominations.map((denomination, index) =>
        (<button key={index} onClick={() => onCoinClick(denomination.denomination)} >
          {denomination.denomination}
        </button>))
      }
    </div>
  </div>
);

export default memo(Denomination);
