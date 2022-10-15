import Link from 'next/link';
import { BsHandbag } from 'react-icons/bs';

export const CartControl = ({ cart }) => {
  const { products } = cart;

  const cartQty = products.reduce((cartQty, product) => {
    const { quantity } = product;

    cartQty += quantity;

    return cartQty;
  }, 0);

  if (cart === null) {
    return;
  }

  return (
    <ul className="border border-zinc-400 text-3xl">
      <li>
        <Link href="/cart">
          <a
            className="w-24 h-24 flex justify-center items-center"
            title="Cart"
          >
            <BsHandbag></BsHandbag>
            {cartQty}
          </a>
        </Link>
      </li>
    </ul>
  );
};
