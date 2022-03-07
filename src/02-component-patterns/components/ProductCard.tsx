import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProductCard } from '../hooks/useProductCard';
import { Children } from 'react';

interface Props {
  product: Product;
  children?: JSX.Element | JSX.Element[];
}

interface Product {
  id: number;
  title: string;
  img?: string;
}

export const ProductImage = ({ img = '' }) => {
  return (
    <img
      className={styles.productImg}
      src={img ? img : noImage}
      alt='Product'
    />
  );
};
export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

interface ProductButtonsProps {
  increaseBy: (value: number) => void;
  count: number;
}

export const ProductButtons = ({ increaseBy, count }: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>{count}</div>

      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};

const ProductCard = ({ product, children }: Props) => {
  const { count, increaseBy } = useProductCard(2);
  const { title, img } = product;
  return (
    <div className={styles.productCard}>
      {/* <ProductImage img={img} />
      <ProductTitle title={title} />
      <ProductButtons increaseBy={increaseBy} count={count} /> */}
      {children}
    </div>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;

export default ProductCard;
