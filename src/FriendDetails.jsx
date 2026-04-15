import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import FriendCard2 from './FriendCard2';
import { LuPhoneCall } from 'react-icons/lu';
import { BsChatSquareTextFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { RiNotificationSnoozeFill } from 'react-icons/ri';
import { IoIosArchive } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { ActivityContext } from './ActivityContext';

const FriendDetails = () => {
  const expectedfriend = useLoaderData();

const {handleActivity} = useContext(ActivityContext);
console.log(handleActivity);
    return (
        <div className='flex gap-5 pt-20 mb-10'>
          <div className='basis-[30%]'>
              <FriendCard2 friend = {expectedfriend}></FriendCard2>
                <button className='flex gap-1 bg-white shadow-md text-center px-4 py-4 mb-2 w-full justify-center items-center'><RiNotificationSnoozeFill /> Snooze 2 Weeks</button>
                <button className='flex gap-1 bg-white shadow-md text-center px-4 py-4 mb-2 w-full justify-center items-center'><IoIosArchive /> Archive</button>
                <button className='flex gap-1 bg-white shadow-md text-center px-4 py-4 mb-2 w-full justify-center items-center'><MdDelete /> Delete</button>
        
        

          </div>
          <div className='basis-[70%]'>
               <div className='grid grid-cols-3 gap-5 mb-10'>
            <div className='bg-white shadow-md text-center px-12 py-12 rounded-xl'>
                <h1 className='text-[#244D3F] font-semibold text-[30px]'>{expectedfriend.days_since_contact}</h1>
                <p className='text-gray-500'>Days Since Contact</p>
            </div>
            <div className='bg-white shadow-md text-center px-15 py-12 rounded-xl'>
                <h1 className='text-[#244D3F] font-semibold text-[30px]'>{expectedfriend.goal}</h1>
                <p className='text-gray-500'>Goal (Days)</p>
            </div>
            <div className='bg-white shadow-md text-center px-10 py-12 rounded-xl'>
                <h1 className='text-[#244D3F] font-semibold text-[30px]'>{expectedfriend.next_due_date}</h1>
                <p className='text-gray-500'>Next Due</p>
            </div>
         
        </div>
            <div className='bg-white shadow-md text-center px-15 py-12 rounded-xl mb-4'>
                <div className='flex justify-between mb-3'>
                  <h1 className='text-[#244D3F] font-semibold text-[20px]'>Relationship Goal</h1>
                  <button className='btn'>Edit</button>
                </div>
                <p className='text-left'>Connect Every <span className='font-bold'>{expectedfriend.goal} days</span></p>
            </div>
        <div className='bg-white shadow-md  px-15 py-12 rounded-xl mb-4 '>
                <h1 className='text-[#244D3F] font-medium text-[20px] mb-3'>Quick Check-In</h1>
                <div className='flex gap-2 justify-between'>
                    <button className='flex flex-col bg-[#E9E9E9] px-20 py-8 rounded-2xl justify-center items-center text-[20px]' onClick={()=>handleActivity(expectedfriend.name,"Call",new Date())}> <LuPhoneCall />Call</button>
                <button className='flex flex-col bg-[#E9E9E9] px-20 py-8 rounded-2xl justify-center items-center text-[20px]'
                onClick={()=>handleActivity(expectedfriend.name,"Text", new Date())}> <BsChatSquareTextFill />Text</button>
                <button className='flex flex-col bg-[#E9E9E9] px-20 py-8 rounded-2xl justify-center items-center text-[20px]'
                onClick={()=>handleActivity(expectedfriend.name,"Video", new Date())}> <FaVideo />Video</button>
                </div>
            </div>
        
          </div>
        </div>
    );
};

export default FriendDetails;