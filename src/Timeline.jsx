import React, { useContext, useState } from 'react';
import { IoMdArrowRoundDown } from 'react-icons/io';
import { MdArrowDropDown } from 'react-icons/md';
import { ActivityContext } from './ActivityContext';
import ActivityCard from './ActivityCard';
import SearchButton from './SearchButton';

const Timeline = () => {
    const {activityItems} = useContext(ActivityContext);
    const [filter,setFilter] = useState("All");
    const setFilteredData= ()=>{
        if(filter === "All") {
            return activityItems;
        }
        else{
            return activityItems.filter((item)=> item.activityType === filter)
        }
    }
    

    return (
        <div className='mt-10 mb-10'>
           <h1 className='text-4xl font-extrabold mb-4'>Timeline</h1>
           <div>
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 text-gray-500  p-5 mt-10 ">Filter Timeline <MdArrowDropDown /></div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={()=>setFilter("All")}><a>All</a></li>
                <li onClick={()=>setFilter("Call")}><a>Call</a></li>
                <li onClick={()=>setFilter("Text")}><a>Text</a></li>
                <li onClick={()=>setFilter("Video")}><a>Video</a></li>
            </ul>
            </div>
             <SearchButton></SearchButton>
           </di v>
            <div className='mb-10'></div>
            {
                setFilteredData().map((item)=><ActivityCard item={item}></ActivityCard>)
            }
        </div>
    );
};

export default Timeline;