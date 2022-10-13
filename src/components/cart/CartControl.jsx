import Link from 'next/link';
export const CartControl = ({ cart }) => {
  const { products } = cart;

  const cartQty = products.reduce((cartQty, product) => {
    const { quantity } = product;

    cartQty += quantity;

    return cartQty;
  }, 0);

  return (
    <ul className="border border-zinc-400 text-3xl">
      <li>
        <Link href="/cart">
          <a
            className="w-24 h-24 flex justify-center items-center"
            title="Cart"
          >
            <BsHandbag></BsHandbag>
            {cartQty}
          </a>
        </Link>
      </li>
    </ul>
  );
};
