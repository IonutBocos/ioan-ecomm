import { useContext } from 'react';
import { AppContext } from '../../pages/_app';

export const CartTotals = () => {
  const cart = useContext(AppContext);

  return (
    <>
      <header>
        <h1>Cart Totals</h1>

        <section>
          <ul>
            <li>Total: </li>
          </ul>
        </section>

        <footer></footer>

        <footer>
          <button
            type="button"
            title="Place Order"
            onClick={() => {
              console.log(cart);
            }}
          >
            Place Order
          </button>
        </footer>
      </header>
    </>
  );
};
