import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Banner = () => {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        'Husen Lokhandwala :)',
        'a <span class="text-red-500">React Developer</span>',
        'a Frontend Developer',
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <>
      <div style={{marginTop: 71}} className='bg-banner md:bg-white bg-cover bg-right-top h-screen flex justify-center items-center text-3xl md:text-6xl text-white text-center text-opacity-70'>
        <span>
          <span className='block sm:inline-block'>Hi there <span className="animate-wave">👋</span>, I am&nbsp;</span>
          <span ref={el} />
        </span>
      </div>
    </>
  );
};

export default Banner;
