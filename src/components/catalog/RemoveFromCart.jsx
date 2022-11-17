import { useContext } from 'react';
import { baseUrl } from '../..';
import { AppContext } from '../../pages/_app';

export const RemoveFromCart = ({ product }) => {
  const { cart, alterProduct } = useContext(AppContext);

  if (cart === null) {
    return;
  }

  const { id: cartId } = cart;
  const { id: productId, title } = product;

  const newCart = {};

  const onClick = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify(newCart),
    })
      .then((response) => {
        return response.json();
      })
      .then((_) => {
        alterProduct(productId);
      });
  };

  return (
    <button
      className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-800 transition-colors "
      title={`Add ${title} to cart`}
      type="button"
      onClick={onClick}
    >
      Remove from cart
    </button>
  );
};
