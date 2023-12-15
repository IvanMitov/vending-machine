import { FC, memo } from "react";
import { IProduct } from "../product/Product";
import styles from "./CodeSelector.module.css";


interface CodeSelectorProps {
    products: IProduct[];
    onCodeClick: (product: IProduct) => void;
}

const CodeSelector: FC<CodeSelectorProps> = ({
  products,
  onCodeClick
}) => (
  <section className={styles.container}>
    {products.map((product: IProduct, index) => (
      <button
        key={index}
        type='button'
        className='selectProduc'
        onClick={() => onCodeClick(product)}
      >
        {index + 1}
      </button>
    ))}
  </section>
);

export default memo(CodeSelector);
