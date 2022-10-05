import Link from 'next/link';
import { BsHandbag } from 'react-icons/bs';

export const CartControl = () => {
  return (
    <ul className="border border-zinc-400 border-1-0 text-3xl">
      <li>
        <Link href="/cart">
          <a
            className="w-24 h-24 flex justify-center items-center"
            title="Cart"
          >
            <BsHandbag></BsHandbag>
          </a>
        </Link>
      </li>
    </ul>
  );
};
