import Link from 'next/link';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <>
      <section className="flex justify-between items-center container px-4 lg:px-0 mx-auto h-80 leading-8">
        <div>
          <h2 className="uppercase font-bold pb-6">Los Angeles</h2>
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
          <h2 className="uppercase font-bold pb-6">San Francisco</h2>
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
          <h2 className="uppercase font-bold pb-6">New York</h2>
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
            <h2 className="uppercase font-bold pb-8">Follow us</h2>
            <ul>
              <li>
                <Link href="https://facebook.com">
                  <a title="follow">Facebook</a>
                </Link>
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

      <div className="border border-t border-l-neutral-900"></div>

      <section className="container px-4 lg:px-0 mx-auto">
        <div>
          <button onClick={scrollToTop}>
            click to scroll to the 100th pixel
          </button>
          <h1>2022. Created by Bocos Ioan</h1>
        </div>
      </section>
    </>
  );
};
