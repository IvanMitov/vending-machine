import { FC, memo } from "react";
import styles from "./Product.module.css";

export interface IProduct {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    currencyId: number,
    available: number,
  }

interface ProductProps {
    product: IProduct;
    productCode: number;
}

const Product: FC<ProductProps> = ({
  product,
  productCode,
}) => {
  const isOutOfStock = product.available <= 0;

  return (
    <article
      className={styles.container}
    >
      <h2 className={styles.title}>{product.name}</h2>
      <p>Code: {productCode}</p>
      <img src={product.imageUrl} alt={product.name} />
      <section className={styles.infoSection}>
        <p className={styles.priceText}>Price: {product.price.toFixed(2)}</p>
        <p className={`${styles.quantityText} ${isOutOfStock ? styles.quantityEmpty : ""}`}>{isOutOfStock ? "Out of stock" : `Avaible items: ${product.available}`}</p>
      </section>
    </article>
  );
};

export default memo(Product);
