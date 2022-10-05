import { useState } from 'react';
import { BsFillGridFill, BsGrid3X3GapFill } from 'react-icons/bs';
import { FaGripLines } from 'react-icons/fa';

const buttonClasses =
  'w-24 h-24 border-1 border-zinc-400 flex justify-center items-center';

export const GridControls = () => {
  const [itemsPerRow, setItemsPerRow] = useState('1/row');

  return (
    <ul className="flex border border-l-0 border-zinc-400 text-3xl">
      <li>
        <button
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1/row' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1/row');
          }}
        >
          <FaGripLines></FaGripLines>
        </button>
      </li>

      <li>
        <button
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2/row' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2/row');
          }}
        >
          <BsFillGridFill></BsFillGridFill>
        </button>
      </li>

      <li>
        <button
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4/row');
          }}
        >
          <BsGrid3X3GapFill></BsGrid3X3GapFill>
        </button>
      </li>
    </ul>
  );
};
