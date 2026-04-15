import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

const Filtering = ({setFilter,filter}) => {
    return (
        <div>
             <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 text-gray-500  p-5 mt-10 ">{filter} <MdArrowDropDown /></div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={()=>setFilter("All")}><a>All</a></li>
                <li onClick={()=>setFilter("Call")}><a>Call</a></li>
                <li onClick={()=>setFilter("Text")}><a>Text</a></li>
                <li onClick={()=>setFilter("Video")}><a>Video</a></li>
            </ul>
            </div>
        </div>
    );
};

export default Filtering;