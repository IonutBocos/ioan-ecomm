import Link from 'next/link';
import { MdKeyboardBackspace } from 'react-icons/md';

export const ContinueShopping = () => {
  return (
    <ul className="border border-zinc-400 text-1xl">
      <li>
        <Link href="/">
          <a
            title="home"
            className="w-60 h-24 flex justify-around items-center text-black uppercase hover:bg-zinc-400"
          >
            <MdKeyboardBackspace className="text-2xl"></MdKeyboardBackspace>{' '}
            Back to shop
          </a>
        </Link>
      </li>
    </ul>
  );
};
