import { useContext } from 'react';
import { baseUrl } from '../..';
import { AppContext } from '../../pages/_app';

export const RemoveFromCart = ({ product }) => {
  const { cart, alterProduct } = useContext(AppContext);

  if (cart === null) {
    return;
  }

  const { id: cartId, products } = cart;
  const { id: productId, title } = product;

  let quantity = 0;
  let isInCart = false;
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      quantity = products[i].quantity;
      isInCart = true;
    }
  }

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
        alterProduct(productId, -quantity);
      });
  };

  return (
    <div>
      {isInCart ? (
        <button
          className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-800 transition-colors "
          title={`Add ${title} to cart`}
          type="button"
          onClick={onClick}
        >
          Remove from cart
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
