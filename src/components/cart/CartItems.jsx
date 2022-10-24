import { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { CartLineItems } from './CartLineItems';

export const CartItems = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  if (products.length <= 0) {
    return <></>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => {
          return (
            <CartLineItems
              product={product}
              key={product.productId}
            ></CartLineItems>
          );
        })}
      </tbody>
    </table>
  );
};
