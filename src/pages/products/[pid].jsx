//  products/2 products/5 products/21

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { baseUrl } from '../..';
import { CartControl, ContinueShopping } from '../../components/cart';
import { Layout } from '../../layouts';
import { BiLoaderCircle } from 'react-icons/bi';

import { AiFillStar } from 'react-icons/ai';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // protectie pentru ca id sa nu fie nul
    if (pid === undefined) {
      return;
    }

    fetch(`${baseUrl}/products/${pid}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProduct(result);
      });
  }, [pid]);

  if (product === null) {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <BiLoaderCircle size="48" className="animate-spin"></BiLoaderCircle>
      </div>
    );
  }

  const { id, title, description, price, image } = product;
  const { rate, count } = product.rating;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(price);

  const index = Math.floor(rate);
  const stars = Array(index);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>
        <main>
          <header className="container px-4 lg:px-0 mx-auto flex justify-between">
            <ContinueShopping></ContinueShopping>

            <CartControl></CartControl>
          </header>

          <section className="mt-16 container px-4 lg:px-0 mx-auto grid gap-8 grid-cols-12">
            <div className="col-start-1 col-span-4">
              <img
                alt={`Image of ${title}`}
                className="block w-full"
                src={image}
              />
            </div>

            <header className="col-start-7 col-span-6 pt-12">
              <h1 className="text-2xl uppercase font-medium">{title}</h1>
              <div>
                {stars.map((_, index) => {
                  return <AiFillStar key={index}></AiFillStar>;
                })}
              </div>
              <p className="mt-12">{description}</p>

              <div className="mt-12">
                <span className="text-3xl leading-9 font-bold">
                  {formattedPrice}
                </span>
              </div>

              <div className="mt-12">
                <button
                  className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-800 transition-colors"
                  title={`Add ${title} to cart`}
                  type="button"
                  onClick={() => {
                    alert(id);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </header>
          </section>
          <section className="border-t"></section>
          <section className="container px-4 lg:px-0 mx-auto">jos</section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
