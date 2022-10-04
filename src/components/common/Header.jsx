import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FaGlasses } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { TiSocialGooglePlus } from 'react-icons/ti';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerIcon = (
    <CgMenu
      size="32"
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    ></CgMenu>
  );
  const closeIcon = (
    <CgClose
      size="32"
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    ></CgClose>
  );
  if (menuOpen === true) {
  }

  return (
    <>
      <section className="flex justify-between items-center lg:flex-col h-full z-10 relative lg:py-16 ">
        <Link href="/">
          <a title="Home">
            <FaGlasses size="32"></FaGlasses>
          </a>
        </Link>

        <button title="Menu" type="button">
          {menuOpen ? closeIcon : hamburgerIcon}
        </button>

        <div className="hidden lg:block">
          <ul className="flex-row gap-5">
            <li>
              <Link href="/">
                <a title="Home">
                  <FaFacebookF size="22"></FaFacebookF>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a title="Home">
                  <FiTwitter size="22"></FiTwitter>
                </a>
              </Link>
            </li>

            <Link href="/">
              <a title="Home">
                <TiSocialGooglePlus size="22px"></TiSocialGooglePlus>
              </a>
            </Link>
          </ul>
        </div>
      </section>

      <nav
        className={`absolute left-0 -top-full transition-transform transform-gpu  ${
          menuOpen ? 'translate-y-full' : ''
        } h-screen w-screen lg:w-screen-1/3 text-white bg-neutral-900 flex justify-center  items-center `}
      >
        <ul className="flex flex-col gap-9 uppercase">
          <li>
            <Link href="/">
              <a title="Home">Home</a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a title="Contact">About</a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a title="Contact">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
