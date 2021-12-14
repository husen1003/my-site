import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Banner = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        'Husen Lokhandwala :)',
        'a <span class="text-red-500">MERN Stack Developer</span>',
        'a Freelancer',
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
      <div className=' bg-banner md:bg-white bg-cover bg-right-top h-screen flex justify-center items-center text-3xl md:text-6xl text-white text-center text-opacity-70'>
        <span>
          <span className="block sm:inline-block">Hello Guys, I am&nbsp;</span>
          <span ref={el} />
        </span>
      </div>
    </>
  );
};

export default Banner;
