import Head from 'next/head';
import { useEffect, useState } from 'react';
import { CartControl } from '../components/cart';
import { Pagination, ProductGrid } from '../components/catalog';
import { GridControls } from '../components/catalog/GridControls';
import { useCart, useProducts } from '../hooks';
import { Layout } from '../layouts';

const Home = () => {
  const [perRow, setPerRow] = useState(4);
  const [products] = useProducts();

  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const cart = useCart(2);

  // fara dependinte in array
  // efectul ruleaza la prima executie a functiei Home

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-end text-zinc-400">
            <GridControls setPerRow={setPerRow}></GridControls>

            <CartControl cart={cart}></CartControl>
          </header>

          <section className="mt-16">
            <ProductGrid
              products={paginatedProducts}
              perRow={perRow}
            ></ProductGrid>
          </section>

          <section>
            <Pagination
              products={products}
              setPaginatedProducts={setPaginatedProducts}
            ></Pagination>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
