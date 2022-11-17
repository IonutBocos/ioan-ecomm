import Link from 'next/link';
import { MdKeyboardBackspace } from 'react-icons/md';

export const ContinueShopping = () => {
  return (
    <ul className="border border-zinc-400 text-1xl  hover:bg-zinc-300 w-40 h-16 lg:w-60 lg:h-24">
      <li className="font-bold">
        <Link href="/">
          <a
            title="home"
            className="flex justify-around items-center text-black uppercase w-40 h-16 lg:w-60 lg:h-24 "
          >
            <MdKeyboardBackspace className="text-4xl "></MdKeyboardBackspace>{' '}
            Back to shop
          </a>
        </Link>
      </li>
    </ul>
  );
};
