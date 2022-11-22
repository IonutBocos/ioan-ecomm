// import { prew } from '../../hooks';

// export const ProductReviews = (prew) => {
//   const { title, price, image, id } = prew;

//   console.log(productCache);

//   const formattedPrice = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   }).format(price);

//   return (
//     <article className="w-full">
//       <header>
//         <div className="w-full  text-center ">
//           <Link href={`/products/${id}`}>
//             <a title={title}>
//               <Image
//                 alt={`Image for product ${title}`}
//                 src={image}
//                 width={200}
//                 height={200}
//                 objectFit="contain"
//                 className="inline -z-10"
//               ></Image>
//             </a>
//           </Link>
//         </div>
//       </header>

//       <section className="mt-8 text-center text-sm flex flex-col items-center">
//         <h1 className="uppercase text-zinc-400 mb-2">{title}</h1>

//         <div className="text-zinc-900 font-light">{formattedPrice}</div>
//       </section>
//     </article>
//   );
// };
