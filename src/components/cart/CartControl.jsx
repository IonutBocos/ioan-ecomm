import Link from 'next/link';
import { useContext } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { AppContext } from '../../pages/_app';

export const CartControl = () => {
  const { cart } = useContext(AppContext);

  return (
    <ul className="border border-zinc-400 text-3xl">
      <li>
        <Link href="/cart">
          <a
            className="w-24 h-24 flex justify-center items-center"
            title="Cart"
          >
            <BsHandbag></BsHandbag>
            {cart.qty}
          </a>
        </Link>
      </li>
    </ul>
  );
};
