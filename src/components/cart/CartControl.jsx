import Link from 'next/link';
import { useContext, useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { AppContext } from '../../pages/_app';

export const CartControl = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  const cartQty = products.reduce((cartQty, product) => {
    const { quantity } = product;

    cartQty += quantity;

    return cartQty;
  }, 0);

  return (
    <ul className="border border-zinc-400 ">
      <li>
        <Link href="/cart">
          <a
            className="w-16 h-16  lg:w-24 lg:h-24 flex justify-center items-center lg:text-3xl"
            title="Cart"
          >
            <BsHandbag className="text-2xl lg:text-4xl"></BsHandbag>
            <span className="absolute right-6 top-16 text-xl lg:top-5 lg:right-4  bg-zinc-300 lg:text-2xl rounded-md -z-10">
              {cartQty}
            </span>
          </a>
        </Link>
      </li>
    </ul>
  );
};
