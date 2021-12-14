import React from 'react';
import Logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex w-11/12 mx-auto items-center justify-between'>
      <div className='flex items-center'>
        <Link className="pr-5" to="/">
          <img
            src={Logo}
            className='animate-spin-slow w-20'
            alt='Logo'
          />
        </Link>
        <div className="flex space-x-5">
          <div>Home</div>
          <Link to="#about">About me</Link>
          <div>Portfolio</div>
        </div>
      </div>
      <div className="cursor-pointer border-black border rounded-lg py-2 px-6 hover:bg-gray-400 transition-all duration-200 ease-linear">Contact Me</div>
    </div>
  );
};

export default Navbar;
