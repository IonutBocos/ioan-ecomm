import Head from 'next/head';
import { CartControl } from '../components/cart';
import { ProductGrid } from '../components/catalog';
import { GridControls } from '../components/catalog/GridControls';
import { Layout } from '../layouts';

const Home = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-end text-zinc-400">
            <GridControls>x</GridControls>

            <CartControl></CartControl>
          </header>

          <section className="mt-16">
            <ProductGrid
              products={Array(12).fill({
                name: 'Prod',
                price: '$12',
              })}
            ></ProductGrid>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
