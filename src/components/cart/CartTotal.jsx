import { useContext } from 'react';
import { AppContext } from '../../pages/_app';

export const CartTotals = () => {
  const cart = useContext(AppContext);

  return (
    <>
      <header className="bg-zinc-300 h-10 flex items-center pl-6 uppercase font-bold">
        <h1>Cart Totals</h1>
      </header>

      <section>
        <ul className="h-16 flex items-center pl-6 border-y-2">
          <li>Total: </li>
        </ul>
      </section>

      <footer>
        <button
          className="bg-black text-white uppercase font-medium text-sm  hover:bg-amber-800 transition-colors w-full h-16"
          type="button"
          title="Place Order"
          onClick={() => {
            console.log(cart);
          }}
        >
          Place Order
        </button>
      </footer>
    </>
  );
};
