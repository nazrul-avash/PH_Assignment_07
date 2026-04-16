import React, { useContext, useState } from 'react';
import { IoMdArrowRoundDown } from 'react-icons/io';
import { MdArrowDropDown } from 'react-icons/md';
import { ActivityContext } from './ActivityContext';
import ActivityCard from './ActivityCard';
import SearchButton from './SearchButton';
import Sorting from './Sorting';
import Filtering from './Filtering';
import EmptyActivity from './EmptyActivity';
import EmptyState from './EmptyState';
import { Outlet } from 'react-router-dom';

const Timeline = () => {
    const {activityItems} = useContext(ActivityContext);
    const [filter,setFilter] = useState("All");
    const [sorting, setSorting] = useState("Desc");
    const [searchKey, setSearchKey] = useState("");
    function doSorting(array){
        if(sorting === "Desc"){
            return [...array].sort((a,b)=>new Date(b.time) - new Date(a.time));
        }
        else if(sorting === "Aesc"){
            return array.sort((a,b)=>new Date(a.time) - new Date(b.time));
        }
    }
    function doSearch(array){
        return array.filter((item)=> item.name.toLowerCase().includes(searchKey.toLowerCase()) || item.activityType.toLowerCase().includes(searchKey.toLowerCase()));
    }
    const setFilteredData= ()=>{
        if(filter === "All") {
           return doSorting(doSearch(activityItems));
        }
        else{
            return doSorting(doSearch(activityItems.filter((item)=> item.activityType === filter)));
        }
    }
    
 if(!activityItems || activityItems.length ===0){
        return <EmptyActivity></EmptyActivity>;
    }
    const filteredData = setFilteredData();
   
    return (
        <div className='mt-10 mb-10'>
           <h1 className='text-4xl font-extrabold mb-4'>Timeline</h1>
           <div className='flex justify-between gap-5 items-center'>
             <Filtering setFilter={setFilter} filter={filter}></Filtering>
             <SearchButton setSearchKey={setSearchKey} searchKey={searchKey}></SearchButton>
             <Sorting setSorting={setSorting} sorting={sorting} ></Sorting>
           </div>
            <div className='mb-10 pt-10'>
                <Outlet context={{filteredData}}></Outlet>
             
            
            </div>
            
        </div>
    );
};

export default Timeline;