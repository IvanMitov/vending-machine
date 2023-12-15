import { FC, memo } from "react";
import styles from "./Output.module.css";
import { IProduct } from "../product/Product";

interface OutputProps {
    change: number;
    orderedProduct?: IProduct;
    onPickClick: VoidFunction;
}

const Output: FC<OutputProps> = ({
  change,
  orderedProduct,
  onPickClick,
}) => (
  <section className={styles.container}>
    <input
      type='number'
      value={change}
      readOnly
      disabled
    />
    <div className={styles.productOutput}>
      {orderedProduct && <img src={orderedProduct.imageUrl} />}
    </div>
    <button
      type="button"
      className="successBtn"
      onClick={onPickClick}
      disabled={!orderedProduct}
    >Get change and product</button>
  </section>
);

export default memo(Output);
