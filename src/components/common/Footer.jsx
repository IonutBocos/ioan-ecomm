import Link from 'next/link';
import { BiArrowToTop } from 'react-icons/bi';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <>
      <section className="flex justify-between items-center flex-col h-auto gap-y-8 py-8 lg:py-0 lg:flex-row container px-4 lg:px-0 mx-auto lg:h-80 leading-8 ">
        <div>
          <h2 className="uppercase font-bold lg:pb-6">Los Angeles</h2>
          <ul>
            <li>145 Oliveshka Street</li>
            <li>Los Angeles, LA 90003</li>

            <li>
              <Link href="tel:+44987065901">
                <a title="phone">+44987065901</a>
              </Link>
            </li>

            <li>
              <Link href="mailto:info@Exemple.com">
                <a title="email">info@Exemple.com</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="uppercase font-bold lg:pb-6">San Francisco</h2>
          <ul>
            <li>145 Oliveshka Street</li>
            <li>Los Angeles, LA 90003</li>

            <li>
              <Link href="tel:+44987065901">
                <a title="phone">+44987065901</a>
              </Link>
            </li>

            <li>
              <Link href="mailto:info@Exemple.com">
                <a title="email">info@Exemple.com</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="uppercase font-bold lg:pb-6">New York</h2>
          <ul>
            <li>145 Oliveshka Street</li>
            <li>Los Angeles, LA 90003</li>

            <li>
              <Link href="tel:+44987065901">
                <a title="phone">+44987065901</a>
              </Link>
            </li>

            <li>
              <Link href="mailto:info@Exemple.com">
                <a title="email">info@Exemple.com</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-between gap-6">
          <div>
            <h2 className="uppercase font-bold lg:pb-8">Follow us</h2>
            <ul>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="follow"
                >
                  Facebook
                </a>
              </li>

              <li>
                <Link href="https://facebook.com">
                  <a title="follow">Twitter</a>
                </Link>
              </li>

              <li>
                <Link href="https://facebook.com">
                  <a title="follow">Instagram</a>
                </Link>
              </li>

              <li>
                <Link href="https://facebook.com">
                  <a title="follow">Linkedln</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-end">
            <ul>
              <li>
                <Link href="https://facebook.com">
                  <a title="follow">Drible</a>
                </Link>
              </li>

              <li>
                <Link href="https://facebook.com">
                  <a title="follow">Behance</a>
                </Link>
              </li>

              <li>
                <Link href="https://facebook.com">
                  <a title="follow">Pinterest</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-0 mx-auto ">
        <div className="border border-t h-28">
          <button
            onClick={scrollToTop}
            className="text-4xl border border-zinc-400 rounded-full relative bottom-5 left-2/4 bg-zinc-100"
          >
            <BiArrowToTop></BiArrowToTop>
          </button>
          <h1 className="text-center">2022. Created by Bocos Ioan</h1>
        </div>
      </section>
    </>
  );
};
