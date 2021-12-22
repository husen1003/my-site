import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import classNames from 'classnames';

const Navbar = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  useEffect(() => {
    const checkScrollTop = () => {
      let btn = document.getElementById('scroll-to-top');
      if (btn) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 500
        ) {
          setShowScrollBtn(true);
        } else {
          setShowScrollBtn(false);
        }
      }
    };
    window.addEventListener('scroll', checkScrollTop);
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="relative">
      <div
        id='navbar'
        className={classNames(
          'flex flex-col md:flex-row w-full mx-auto items-center justify-between fixed top-0 bg-white md:px-10 transition-all duration-700'
        )}
      >
        <div className='flex items-center w-full md:w-auto justify-between md:justify-start px-3 md:px-0'>
          <div className='md:pr-5' onClick={scrollToTop}>
            <img src={Logo} className='animate-spin-slow w-20' alt='Logo' />
          </div>
          <div
            className='md:hidden'
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? ("Close") : ("Open")}
          </div>
          <div className='hidden md:flex flex-col md:flex-row text-center md:space-x-5'>
            <div onClick={scrollToTop}>Home</div>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-71}
            >
              {/* <Link to="#about" onClick={goAbout} > */}
              About me
            </Link>
            <Link to='my-work' smooth={true} offset={-71}>
              My work
            </Link>
          </div>
        </div>
        <Link
          to='contact'
          smooth={true}
          offset={-71}
          className='hidden md:block cursor-pointer border-black border rounded-lg py-2 px-6 hover:bg-gray-400 transition-all duration-200 ease-linear'
        >
          Contact
        </Link>
      </div>
      <div
        id='scroll-to-top'
        className={classNames(
          'fixed bottom-5 right-5 border-2 p-2 rounded-3xl border-black transition-all duration-300 ease-linear',
          { 'opacity-0': !showScrollBtn }
        )}
        onClick={scrollToTop}
      >
        Top
      </div>
      <div className={classNames('fixed bg-white w-full text-center transition-all duration-700', {'-translate-x-full': !isMobileNavOpen})}>
        <div onClick={scrollToTop} className="py-4 hover:bg-slate-300 transition-all duration-300">Home</div>
        <div className="py-4 hover:bg-slate-300 transition-all duration-300">
          <Link to='about' smooth={true}>
            About me
          </Link>
        </div>
        <div className="py-4 hover:bg-slate-300 transition-all duration-300">
          <Link to='my-work' smooth={true}>
            My work
          </Link>
        </div>
        <div className="py-4 hover:bg-slate-300 transition-all duration-300">
          <Link to='contact' smooth={true}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
