import ProductCard from '../components/ProductCard';

const product = {
  id: 1,
  title: 'Coffee Mug',
  img: './coffee-mug.png',
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title={''} />
        {/* <ProductCard.Buttons /> */}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
