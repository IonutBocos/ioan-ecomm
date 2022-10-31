import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { baseUrl } from '../..';

export const RelatedProducts = ({ category, relatedId }) => {
  const [relatedProducts, setRelatedProducts] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/products/category/${category}?limit=4`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setRelatedProducts(result);
      });
  }, [category]);

  // sa nu mai uit niciodata de componenta de verificare cand starea e null.. never ever
  if (relatedProducts === null) {
    return <></>;
  }

  return (
    <div className="flex justify-between text-center my-6 mx-0">
      {relatedProducts.map((relatedProduct) => {
        const { title, price, image, id } = relatedProduct;
        const formattedPrice = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(price);

        if (category === category && relatedId !== id) {
          return (
            <article className="w-full">
              <section>
                <Link href={`/products/${id}`}>
                  <a title={title}>
                    <Image
                      alt={title}
                      src={image}
                      width={250}
                      height={250}
                      objectFit="contain"
                      className="inline -z-10"
                    ></Image>
                  </a>
                </Link>
              </section>
              <section>
                <h1 className="inline text-zinc-700">{title}</h1>
                <div className="text-zinc-700 font-bold">{formattedPrice}</div>
              </section>
            </article>
          );
        }
      })}
    </div>
  );
};
