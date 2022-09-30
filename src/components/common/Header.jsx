import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FaGlasses } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

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
      <section className="flex justify-between items-center h-full z-10 relative">
        <Link href="/">
          <a title="Home">
            <FaGlasses size="32"></FaGlasses>
          </a>
        </Link>

        <button title="Menu" type="button">
          {menuOpen ? closeIcon : hamburgerIcon}
        </button>
      </section>

      <nav
        className={`absolute left-0 ${
          menuOpen ? 'top-0' : '-top-full'
        } h-screen w-screen text-white bg-neutral-900 flex justify-center  items-center `}
      >
        <ul className="flex flex-col gap-9">
          <li>
            <Link href="/">
              <a title="Home">Home</a>
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
