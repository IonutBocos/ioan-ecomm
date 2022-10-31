import Head from 'next/head';
import {
  CartControl,
  CartItems,
  CartTotals,
  CartVaucher,
  ContinueShopping,
} from '../components/cart';
import { useCart } from '../hooks';
import { Layout } from '../layouts';

const Cart = () => {
  const cart = useCart(2);

  if (cart === null) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-between text-zinc-400">
            <ContinueShopping></ContinueShopping>

            <CartControl cart={cart}></CartControl>
          </header>

          <section className="mt-16 grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <CartItems></CartItems>
              <CartVaucher></CartVaucher>
            </div>

            <aside className="col-span-4">
              <CartTotals className="text-center"></CartTotals>
            </aside>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
