import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ToggleTheme from './Toggletheme';
import Menu from '@/public/svg/menu.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="fixed w-full h-24 font-mono text-2xl bg-white text-black dark:bg-black dark:text-white">
        <div className="flex justify-between items-center h-full w-full px-8 2xl:px-32 ">
          <Link href="/"><div className="mr-5 mb-1">Wintry</div></Link>
          <div className="flex items-center">
            <div className="mt-2 mr-3 md:hidden"><ToggleTheme/></div>
            <button
              className="flex md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              < Menu />
            </button>
          </div>
          <ul className="hidden md:flex justify-end items-center space-x-7">
            <li>
              <Link href="/">
                <div className="hover:text-fallow dark:hover:text-light-bubblegum ">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="hover:text-fallow dark:hover:text-light-bubblegum">About</div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="hover:text-fallow dark:hover:text-light-bubblegum">Contact</div>
              </Link>
            </li>
            <li className="ml-3 mt-1">
              <ToggleTheme/>
            </li>
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed top-24 right-8 w-48 h-auto bg-white dark:bg-black text-center transform text-xl ${
          isOpen ? 'opacity-100' : 'opacity-0'
        } transition duration-300 ease-in-out z-20 md:hidden rounded border`}
      >
        <ul className="flex flex-col space-x-0 md:space-x-7 space-y-2">
          <li className=" mt-1">
            <Link href="/">
              <div
                className={`${
                  router.pathname === '/'
                    ? 'text-fallow dark:text-light-bubblegum'
                    : ''
                } hover:text-fallow dark:hover:text-light-bubblegum`}
              >
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div
                className={`${
                  router.pathname === '/about'
                    ? 'text-fallow dark:text-light-bubblegum'
                    : ''
                } hover:text-fallow dark:hover:text-light-bubblegum`}
              >
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div
                className={`${
                  router.pathname === '/contact'
                    ? 'text-fallow dark:text-light-bubblegum'
                    : ''
                } hover:text-fallow dark:hover:text-light-bubblegum mb-1`}
              >
                Contact
              </div>
            </Link>
          </li> 
        </ul> 
      </div> 
    </>
  );
};

export default Navbar;
