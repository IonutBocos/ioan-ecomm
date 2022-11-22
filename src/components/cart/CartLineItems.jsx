import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useProduct } from '../../hooks';
import { AppContext } from '../../pages/_app';
import { ProductReviews, RemoveFromCart } from '../catalog';
import { BsTrash } from 'react-icons/bs';
import { baseUrl } from '../..';

export const CartLineItems = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  const { alterProduct, cart } = useContext(AppContext);

  if (!isLoaded) {
    return <></>;
  }

  const { id: cartId, products } = cart;
  const { image, price, id, title, rating } = cartItem;

  let quantityIsOne = false;
  for (let i = 0; i < products.length; i++) {
    if (quantity === 1) {
      quantityIsOne = true;
    }
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price * quantity);

  const formattedPriceOne = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

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
    <tr className="h-120 border-b ">
      <td>
        <button
          type="button"
          title="Remove from cart"
          className="p-2 text-black hover:border hover:bg-zinc-600 hover:text-white text-sm"
          onClick={onClick}
        >
          X
        </button>
      </td>

      <td className=" items-center flex">
        <Link href={`/products/${id}`}>
          <a title={title}>
            <Image
              src={image}
              width="100"
              height="100"
              objectFit="contain"
              className="inline -z-10"
            ></Image>
          </a>
        </Link>

        <div className="flex-row text-sm lg:text-base">
          <Link href={`/products/${id}`}>
            <a title={title}>{title}</a>
          </Link>

          <ProductReviews
            rate={rating.rate}
            count={rating.count}
          ></ProductReviews>
        </div>
      </td>
      <td className="text-center text-sm lg:text-base">{formattedPriceOne}</td>
      <td className="text-center">
        <div
          className="border flex items-center
        "
        >
          <button
            type="button"
            title="Decrese"
            className="p-4"
            onClick={() => {
              alterProduct(id, -1);
            }}
          >
            -
          </button>
          {quantity}
          <button
            type="button"
            title="Iecrese"
            className="p-4"
            onClick={() => {
              alterProduct(id, +1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td className="text-center">{formattedPrice}</td>
    </tr>
  );
};
