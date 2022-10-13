import Link from 'next/link';
import { MdKeyboardBackspace } from 'react-icons/md';

export const ContinueShopping = () => {
  return (
    <ul className="border border-zinc-400 text-1xl  hover:bg-zinc-300">
      <li>
        <Link href="/">
          <a
            title="home"
            className="w-60 h-24 flex justify-around items-center text-black uppercase"
          >
            <MdKeyboardBackspace className="text-4xl"></MdKeyboardBackspace>{' '}
            Back to shop
          </a>
        </Link>
      </li>
    </ul>
  );
};
