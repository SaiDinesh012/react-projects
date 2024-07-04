import React from 'react';
import logo from "../assets/disney.png";
// import HeaderItem from './Header.Item';


import { HiHome, HiMagnifyingGlass, HiOutlineShoppingCart, HiPlayCircle, HiTv } from 'react-icons/hi';

function Header() {
  const menu=[
    {
      name:'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      name:'SERIES',
      icon:HiTv
    },
  ]
  return (
    <div>
   <img src={logo} className='w-[120px] md:w-[115px] object-cover' />
   </div>
  )
}

export default Header;
