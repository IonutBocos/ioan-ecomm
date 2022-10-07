import Head from 'next/head';
import { useEffect, useState } from 'react';
import { baseUrl } from '..';
import { CartControl } from '../components/cart';
import { ProductGrid } from '../components/catalog';
import { GridControls } from '../components/catalog/GridControls';
import { Layout } from '../layouts';

const Home = () => {
  const [perRow, setPerRow] = useState(4);
  const [products, setProducts] = useState([]);

  // fara dependinte in array
  // efectul ruleaza la prima executie a functiei Home
  useEffect(() => {
    fetch(`${baseUrl}/products?limit=12`)
      .then((response) => {
        // response.json -> Promise
        return response.json();
      })
      .then((result) => {
        // never mutate state
        setProducts(result);
      });

    (async () => {
      const response = await fetch('https://swapi.dev/api/films');
      const result = await response.json();
      console.log(result, 'await version');
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-end text-zinc-400">
            <GridControls setPerRow={setPerRow}></GridControls>

            <CartControl></CartControl>
          </header>

          <section className="mt-16">
            <ProductGrid products={products} perRow={perRow}></ProductGrid>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
