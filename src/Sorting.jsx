import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

const Sorting = ({setSorting,sorting}) => {
    return (
      
             <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 text-gray-500  p-5 mt-10 ">{sorting} <MdArrowDropDown /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={()=>setSorting("Desc")}><a>Desc</a></li>
                            <li onClick={()=>setSorting("Aesc")}><a>Aesc</a></li>
                          
                        </ul>
                        </div>
      
    );
};

export default Sorting;