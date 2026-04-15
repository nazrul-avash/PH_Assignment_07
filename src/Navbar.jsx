import React from 'react';
import logo from './assets/logo.png';
import { FaChartLine, FaHome } from 'react-icons/fa';
import { RiTimeLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to={"/"} className="btn btn-ghost text-xl"><img src={logo}></img></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-3 text-[#64748B] flex gap-3">
      <NavLink to={"/"} className={({isActive})=>`flex items-center gap-2 whitespace-nowrap font-semibold ${isActive?"text-white bg-[#244D3F] p-2 rounded-[5px] ":""}`}>
       <FaHome className="text-lg" />Home</NavLink>
      <NavLink to={"/timeline"} className={({isActive})=>`flex items-center gap-2 whitespace-nowrap font-semibold ${isActive?"text-white bg-[#244D3F] p-2 rounded-[5px] ":""}`}><RiTimeLine />Timeline</NavLink>
      <NavLink to={"/stats"} className={({isActive})=>`flex items-center gap-2 whitespace-nowrap font-semibold ${isActive?"text-white bg-[#244D3F] p-2 rounded-[5px] ":""}`}><FaChartLine />Stats</NavLink>
     
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;